---
title: "Components Library"
description: "Developed an SEO keyword visualization and analysis platform using React.js, D3.js, Node.js, and PostgreSQL, enabling users to explore and gain insights from complex keyword data through interactive visualizations."
publishDate: "2023-07-09T12:39:36.050Z"
image: "/assets/project/attryb-d3/cover.png"
company: "Attryb"
author: "Abhinay Thakur"
tags: [webdev, thoughts, coding, essay]
pinned: true
---

![Cover Image](/assets/project/attryb-d3/cover.png)

## Overview

Developed a data-driven landing page for Attryb's marketing website to showcase the scale and complexity of SEO keyword data. The project aimed to provide users with an intuitive interface to search, explore, and analyze SEO-related data, focusing on visualizing keyword relationships and clusters.

<p><img src="/assets/project/attryb-d3/ss8.avif" alt="Screenshot" class="project-screenshot"/></p>

## Search Interface

Implemented a user-friendly search interface allowing users to input keywords and access relevant SEO data. The example demonstrates the functionality using the keywords "artificial diamond choker set"

<p><img src="/assets/project/attryb-d3/ss2.avif" alt="Screenshot" class="project-screenshot"/></p>

## System Overview

Utilized a backend system using Node.js and PostgreSQL to handle data retrieval and processing. The React frontend communicates with the backend API, which queries the database, parses the data, and sends it back to the client.

Developed algorithm to translate the retrieved data into a tree structure compatible with D3.js for visualization purposes. The normalized data is also converted into arrays for rendering graphs.

<p><img src="/assets/project/attryb-d3/ss11.png" alt="Screenshot" class="project-screenshot"/></p>

## D3 Tree Visualization

- <strong>Full Tree</strong>: Implemented a full tree visualization using D3.js, where each leaf node represents a final keyword, and branch nodes represent the categories the keyword belongs to. Users can explore the entire keyword hierarchy at a glance.
- <strong>Sub-Tree</strong>: Enabled users to click on a category node to render a sub-tree, displaying the cluster of associated keywords. This feature allows users to focus on specific keyword subsets.
- <strong>Node Details</strong>: Provided a detailed view of individual nodes upon clicking, presenting relevant information and metrics associated with the selected keyword.

<p><img src="/assets/project/attryb-d3/ss1.avif" alt="Screenshot" class="project-screenshot"/></p>

<p><img src="/assets/project/attryb-d3/ss6.avif" alt="Screenshot" class="project-screenshot"/></p>

<p><img src="/assets/project/attryb-d3/ss7.avif" alt="Screenshot" class="project-screenshot"/></p>

<p><img src="/assets/project/attryb-d3/ss9.avif" alt="Screenshot" class="project-screenshot"/></p>

## D3 Scatter Plot Graphs

- <strong>Keyword Clustering</strong>: Grouped keywords based on clusters defined by attributes beyond their associated categories. Utilized scatter plot graphs to visualize these keyword clusters effectively.
- <strong>Interactive Exploration</strong>: Implemented interactive scatter plot graphs, enabling users to explore keyword relationships, identify patterns, and gain insights into SEO data.

<p><img src="/assets/project/attryb-d3/ss3.avif" alt="Screenshot" class="project-screenshot"/></p>

<p><img src="/assets/project/attryb-d3/ss5.avif" alt="Screenshot" class="project-screenshot"/></p>

<p><img src="/assets/project/attryb-d3/ss4.avif" alt="Screenshot" class="project-screenshot"/></p>

## Impact

The SEO Keyword Visualization and Analysis Platform empowers Attryb's clients to effectively navigate and understand complex SEO keyword data. By providing intuitive visualizations and interactive exploration capabilities, the platform enables users to identify keyword relationships, uncover insights, and make data-driven decisions to optimize their SEO strategies.

The combination of a powerful search interface, efficient data processing backend, and visually engaging D3.js visualizations sets this project apart. It demonstrates the ability to handle large-scale SEO data, normalize it into meaningful structures, and present it in a user-friendly manner.
