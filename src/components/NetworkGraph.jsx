import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const NetworkGraph = ({ data, setHoveredNode, setConnectedNodes, setConnectedLinks, pt_width }) => {
    const svgRef = useRef();
    const containerRef = useRef();

    useEffect(() => {
        if (!data || data.length === 0) return;
        const container = containerRef.current;

        let width = 0;
        if (window.innerWidth > 800 || window.innerWidth < 340) {
            if (pt_width <= 700 || pt_width <= 300) {
                width = pt_width;
            } else {
                width = 700;
            }
        } else {
            width = 300;
        }
        const height = container.clientHeight;
        const nodeRadius = Math.max(12, width / 100);
        const margin = 25;

        const svg = d3.select(svgRef.current)
            .attr("width", width)
            .attr("height", height)
            .style("background", "transparent");

        svg.selectAll("*").remove();

        const g = svg.append("g");

        const uniqueNodes = [...new Set(data.flatMap(d => [d.source, d.target]))];
        const nodes = uniqueNodes.map(stock => ({ id: stock }));

        const links = data.map(d => ({
            source: d.source,
            target: d.target,
            weight: d.weight
        }));

        const simulation = d3.forceSimulation(nodes)
            .force("charge", d3.forceManyBody().strength(-100))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide(nodeRadius * 1.5))
            .force("x", d3.forceX().strength(0.05).x(width / 2))
            .force("y", d3.forceY().strength(0.05).y(height / 2))
            .force("link", d3.forceLink(links).id(d => d.id).distance(200));

        const link = g.selectAll(".link")
            .data(links)
            .enter().append("line")
            .attr("class", "link")
            .attr("stroke", "#888")
            .attr("stroke-width", d => d.weight)
            .attr("opacity", 0.6);

        const node = g.selectAll(".node")
            .data(nodes)
            .enter().append("circle")
            .attr("class", "node")
            .attr("r", nodeRadius)
            .attr("fill", (d, i) => (i === 0 || i === 1 ? "red" : "cyan"));

        const labels = g.selectAll(".label")
            .data(nodes)
            .enter().append("text")
            .attr("class", "label")
            .attr("text-anchor", "middle")
            .attr("font-size", width > 500 ? "15px" : "10px")
            .attr("fill", "white")
            .text(d => d.id.slice(0, 4));

        const linkLabels = g.selectAll(".linkLabel")
            .data(links)
            .enter().append("text")
            .attr("class", "linkLabel")
            .attr("text-anchor", "middle")
            .attr("font-size", "13px")
            .attr("fill", "yellow")
            .style("visibility", "hidden");

        simulation.on("tick", () => {
            node.attr("cx", d => d.x = Math.max(margin, Math.min(width - margin, d.x)))
                .attr("cy", d => d.y = Math.max(margin, Math.min(height - margin, d.y)));

            link.attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            labels.attr("x", d => d.x)
                .attr("y", d => d.y - nodeRadius);
        });

        node.on("mouseenter", (event, d) => {
            const connectedLinks = links.filter(link => link.source.id === d.id || link.target.id === d.id);
            const connectedNodes = new Set(connectedLinks.flatMap(link => [link.source.id, link.target.id]));

            link.attr("stroke", l => (connectedNodes.has(l.source.id) && connectedNodes.has(l.target.id)) ? "yellow" : "#888")
                .attr("opacity", l => (connectedNodes.has(l.source.id) && connectedNodes.has(l.target.id)) ? 1 : 0.3);

            node.attr("fill", n => connectedNodes.has(n.id) ? "yellow" : "gray");

            labels.attr("fill", n => connectedNodes.has(n.id) ? "#fff" : "#000");

            linkLabels.style("visibility", l => (connectedNodes.has(l.source.id) && connectedNodes.has(l.target.id)) ? "visible" : "hidden");

            setHoveredNode(d.id);
            setConnectedNodes([...connectedNodes].filter(n => n !== d.id));
            setConnectedLinks(connectedLinks);
        });

        node.on("mouseleave", () => {
            link.attr("stroke", "#888").attr("opacity", 0.6);
            node.attr("fill", (d, i) => (i === 0 || i === 1 ? "red" : "cyan"));
            labels.attr("fill", "#fff");
            linkLabels.style("visibility", "hidden");
        });

    }, [data, setHoveredNode, setConnectedNodes]);

    return (
        <div ref={containerRef} className="h-[400px] overflow-x-auto relative">
            <svg ref={svgRef} className="w-full h-full"></svg>
        </div>
    );
};

export default NetworkGraph;
