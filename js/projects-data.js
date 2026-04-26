const projectsData = [
  {
    id: "biosensor",
    title: "Genetic BioSensor for Environmental Monitoring",
    category: "Genetics & Monitoring",
    shortDescription: "Developing microbial sensors that detect specific toxins in real-time through bioluminescence.",
    problem: "Traditional environmental testing requires lab-based analysis, which is slow and expensive for remote field monitoring.",
    methodology: "We engineered bacterial strains to express luciferase in the presence of heavy metals, creating a portable biological sensor.",
    results: "The BioSensor detected arsenic and lead at concentrations as low as 10ppb within 15 minutes of exposure.",
    conclusion: "This technology provides an early-warning system for water contamination that is both cost-effective and highly sensitive.",
    media: { images: ["assets/images/projects pictures/BioSensor.jpeg"], pdf: null }
  },
  {
    id: "zno-nanoparticles",
    title: "ZnO Nanoparticle Bioremediation",
    category: "Nano-Biotechnology",
    shortDescription: "Investigating the interaction between Zinc Oxide nanoparticles and microbial degradation pathways.",
    problem: "Industrial nanoparticles are increasingly found in wastewater, with unknown long-term effects on microbial ecosystems.",
    methodology: "We studied the effect of ZnO concentration on the metabolic activity of soil-purifying bacteria in bioreactors.",
    results: "Specific microbial consortia were found to effectively stabilize ZnO nanoparticles, preventing their spread in soil layers.",
    conclusion: "Integrated nano-biological systems offer a new frontier for cleaning up high-tech industrial waste.",
    media: { images: ["assets/images/projects pictures/Zn0 .jpeg"], pdf: null }
  },
  {
    id: "natures-solution",
    title: "Nature's Biological Solutions",
    category: "Ecosystem Restoration",
    shortDescription: "Harnessing indigenous biological processes to restore damaged ecosystems without synthetic chemicals.",
    problem: "Conventional restoration often involves chemicals that can cause secondary damage to the ecosystem's balance.",
    methodology: "We identified and isolated key 'pioneer' species that naturally accelerate soil enrichment in degraded regions.",
    results: "Ecosystem recovery was 60% faster when using optimized biological inoculation compared to natural recovery.",
    conclusion: "Leveraging nature's own mechanisms is the most sustainable approach to long-term biodiversity restoration.",
    media: { images: ["assets/images/projects pictures/naturesSolution.jpeg"], pdf: null }
  },
  {
    id: "bac-01",
    title: "Microbial Degradation of Synthetic Toxins",
    category: "Bacteriology",
    shortDescription: "Advanced study on bacterial strains capable of breaking down complex synthetic chemical bonds.",
    problem: "Persistent organic pollutants (POPs) remain in the environment for decades due to their stable chemical structures.",
    methodology: "Screening of microbial libraries for enzymes that target high-stability aromatic rings under anaerobic conditions.",
    results: "Isolation of a novel Pseudomonas strain with a 30% higher degradation efficiency for industrial solvents.",
    conclusion: "Targeted microbial evolution can provide solutions for even the most persistent man-made chemicals.",
    media: { images: ["assets/images/projects pictures/bac 01.jpeg"], pdf: null }
  },
  {
    id: "bac-02",
    title: "Genetic Modification of Waste-Consuming Bacteria",
    category: "Genetics",
    shortDescription: "Engineering the metabolic pathways of E. coli to utilize complex industrial waste as a carbon source.",
    problem: "Industrial waste streams are often toxic to standard bioprocesses, requiring expensive pre-treatment.",
    methodology: "Insertion of foreign gene clusters into E. coli to enable the metabolization of high-toxicity waste byproducts.",
    results: "Engineered strains showed sustained growth in waste concentrations that were previously lethal.",
    conclusion: "Genetically modified organisms (GMOs) are essential for converting waste directly into valuable bioproducts.",
    media: { images: ["assets/images/projects pictures/bac02.jpeg"], pdf: null }
  },
  {
    id: "bac-03",
    title: "Analysis of Extremophile Enzyme Activity",
    category: "Enzymology",
    shortDescription: "Discovering enzymes that function in extreme pH and temperature for industrial applications.",
    problem: "Most industrial processes require harsh conditions where standard biological enzymes denature and fail.",
    methodology: "Sampling and cultivation of bacteria from extreme thermal vents to isolate heat-stable polymerases.",
    results: "Identification of a new thermostable enzyme that remains active up to 95°C for extended periods.",
    conclusion: "Extremophiles provide the blueprint for the next generation of robust industrial bio-catalysts.",
    media: { images: ["assets/images/projects pictures/bac03.jpeg"], pdf: null }
  },
  {
    id: "bac-04",
    title: "Bioremediation of Heavy Metal Contaminated Soils",
    category: "Soil Science",
    shortDescription: "Using specialized bacteria to sequester and immobilize toxic heavy metals in industrial sites.",
    problem: "Heavy metal contamination in soil poses a permanent health risk and is extremely difficult to remove.",
    methodology: "Application of bio-augmentation using metal-binding bacterial consortia in contaminated soil samples.",
    results: "Significant reduction in the bioavailability of Lead and Cadmium within 90 days of treatment.",
    conclusion: "Biological immobilization is a cost-effective alternative to mass soil excavation and replacement.",
    media: { images: ["assets/images/projects pictures/bac04.jpeg"], pdf: null }
  },
  {
    id: "bac-05",
    title: "Synthesis of Bio-Based Polymer Alternatives",
    category: "Biomaterials",
    shortDescription: "Producing sustainable plastic alternatives directly from bacterial fermentation processes.",
    problem: "Petroleum-based plastics are non-renewable and contribute to the global waste crisis.",
    methodology: "Optimizing the production of Polyhydroxyalkanoates (PHA) in bacteria using agricultural waste as feed.",
    results: "Achieved a 45% increase in biopolymer yield through specific gene expression optimization.",
    conclusion: "Bacterial factories can produce high-quality materials that are fully biodegradable in marine environments.",
    media: { images: ["assets/images/projects pictures/bac05.jpeg"], pdf: null }
  },
  {
    id: "bac-06",
    title: "Microbial Carbon Capture and Storage Study",
    category: "Climate Science",
    shortDescription: "Investigating bacterial strains that convert atmospheric CO2 into stable carbonate minerals.",
    problem: "Rising CO2 levels require rapid and permanent sequestration solutions to mitigate climate change.",
    methodology: "Engineering carbonic anhydrase producing bacteria to accelerate the mineralization of CO2 in saline aquifers.",
    results: "Enhanced CO2 mineralization rate by 2.5x compared to standard geological sequestration.",
    conclusion: "Biological carbon capture is a promising tool for achieving net-zero emissions targets.",
    media: { images: ["assets/images/projects pictures/bac06.jpeg"], pdf: null }
  },
  {
    id: "bac-07",
    title: "Optimization of Bacterial Biofuel Production",
    category: "Bioenergy",
    shortDescription: "Improving the efficiency of ethanol and butanol production through genetic metabolic engineering.",
    problem: "Current biofuel production is often inefficient and competes with food resources for land and water.",
    methodology: "Redesigning the central metabolism of Clostridium to maximize solvent production and minimize waste.",
    results: "Yields increased by 20%, significantly improving the economic viability of the fermentation process.",
    conclusion: "Genetic engineering is the key to making biofuels a competitive alternative to fossil fuels.",
    media: { images: ["assets/images/projects pictures/bac07.jpeg"], pdf: null }
  },
  {
    id: "bac-08",
    title: "Genetic Mapping of Biodegradable Plastic Pathways",
    category: "Genetics",
    shortDescription: "Identifying the specific genes responsible for the natural decomposition of bioplastics in soil.",
    problem: "The exact biological mechanisms of bioplastic breakdown are not well understood, making it hard to design better materials.",
    methodology: "Metagenomic analysis of soil samples to identify microbial genes that encode plastic-degrading enzymes.",
    results: "Discovered three novel gene clusters that play a primary role in the degradation of PLA and PBS plastics.",
    conclusion: "Mapping these pathways allows us to design the 'perfect' plastic that breaks down exactly when intended.",
    media: { images: ["assets/images/projects pictures/bac08.jpeg"], pdf: null }
  },
  {
    id: "bac-09",
    title: "Enzyme Engineering for Rapid Plastic Decomposition",
    category: "Bio-Engineering",
    shortDescription: "Creating highly efficient 'designer' enzymes to tackle the global PET plastic waste mountain.",
    problem: "Natural degradation of PET plastic takes hundreds of years; existing enzymes are too slow for industrial use.",
    methodology: "Protein engineering and directed evolution to enhance the stability and activity of PETase enzymes.",
    results: "Engineered enzyme showed a 10x increase in degradation speed at industrial temperatures.",
    conclusion: "Circular plastic economies are possible when biology is used to close the loop on waste.",
    media: { images: ["assets/images/projects pictures/bac09.jpeg"], pdf: null }
  },
  {
    id: "bac-10",
    title: "Study of Microbial Symbiosis in Polluted Ecosystems",
    category: "Ecology",
    shortDescription: "Analyzing how different microbial species work together to survive and clean up toxic environments.",
    problem: "Single-species bioremediation often fails in the complex, fluctuating conditions of real-world pollution sites.",
    methodology: "Constructing synthetic microbial consortia and monitoring their stability and cleanup efficiency in the field.",
    results: "Multi-species biofilms were 50% more resistant to toxic shocks than single-species systems.",
    conclusion: "The future of bioremediation lies in understanding and designing complex microbial communities.",
    media: { images: ["assets/images/projects pictures/bac10.jpeg"], pdf: null }
  },
  {
    id: "bac-11",
    title: "Advanced Bacterial Strain for Industrial Waste Management",
    category: "Waste Management",
    shortDescription: "A culmination of research into creating the ultimate waste-consuming bacterial super-strain.",
    problem: "Industrial waste is increasingly complex, requiring a versatile and robust biological treatment system.",
    methodology: "Integration of multiple degradation pathways from various species into a single, high-growth host strain.",
    results: "The resulting 'super-strain' can simultaneously metabolize heavy metals, plastics, and industrial solvents.",
    conclusion: "A universal biological waste treatment solution is within reach through advanced synthetic biology.",
    media: { images: ["assets/images/projects pictures/bac11.jpeg"], pdf: null }
  }
];
