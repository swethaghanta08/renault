"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Footer from "../pages/home/Footer"
import Skeleton from "@mui/material/Skeleton";

const IndustrialBlog = () => {
  const [currentView, setCurrentView] = useState("home")
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const [backgroundImage, setBackgroundImage] = useState("")

  useEffect(() => {
    setTimeout(() => setLoading(false), 20)
    const updateBackground = () => {
      const width = window.innerWidth
      let imagePath = "/assets/blogpage/heroimage.png"
      setBackgroundImage(imagePath)
    }
    updateBackground()
    window.addEventListener("resize", updateBackground)
    return () => window.removeEventListener("resize", updateBackground)
  }, [])

  const blogPosts = [
    {
      id: 1,
      title: "What Is Granulation & Pelletization? A Quick Guide To Solid Processing Equipment",
      excerpt:
        "Understand the role of granulation and pelletization in pharmaceutical manufacturing. Learn about key machines like fluid bed coaters, mass mixers, and more.",
      image: "/assets/blogpage/image1.png",
      author: "Ram",
      date: "31 May 2021",
      content: `
        <div class="content-section">
          <p>In the world of pharmaceutical chemical manufacturing, granulation and pelletization are vital role in turning fine powders into usable, stable, and high-quality products. These processes are essential for enhancing product flow, compaction, and dissolution characteristics. This comprehensive guide will explore the fundamentals of granulation and pelletization, their applications, and the equipment used in each process.</p>
        </div>
        <div class="content-section">
          <h2>What Is Granulation?</h2>
          <p>Granulation is the process of transforming fine powders into granules – small, multi-particle aggregates. This transformation from powders to granules happens via wet granulation or dry granulation:</p>
          
          <div class="image-container">
            <img src="/assets/blogpage/image2.png" alt="Granulation Process" class="content-image" />
          </div>
          <h3>Wet Granulation:</h3>
          <ul>
            <li>Process involves incorporating granulating liquid to a powder mixture</li>
            <li>Suitable for moisture-stable compounds</li>
            <li>Produces good flow properties</li>
            <li>Improves tablet hardness and uniformity</li>
            <li>Common in pharmaceutical and nutraceutical industries</li>
            <li>Requires proper granule drying and moisture control</li>
            <li>Equipment includes high-shear mixers, fluid bed processors</li>
          </ul>
          <h3>Dry Granulation:</h3>
          <ul>
            <li>Suitable for moisture-sensitive materials</li>
            <li>Process involves compaction of powder mixture</li>
            <li>No liquid binder required</li>
            <li>More economical for large-scale production</li>
            <li>Produces dense compacts or briquettes</li>
            <li>Provides break-down into granules or coarse fragments</li>
          </ul>
        </div>
        <div class="content-section">
          <h2>What Is Pelletization?</h2>
          <p>Pelletization is a specialized form of granulation where spherical pellets are produced. It involves the size and shape of pellets for optimum results with a spherical pellet being the preferred result due to its superior properties:</p>
          
          <div class="image-container">
            <img src="/assets/blogpage/image3.png" alt="Pelletization Process" class="content-image" />
          </div>
          <ul>
            <li>Produces spherical or nearly spherical pellets</li>
            <li>Provides uniform particle size distribution</li>
            <li>Enhances flow properties and packing density</li>
            <li>Improves dissolution characteristics</li>
            <li>Reduces dust formation during handling</li>
            <li>Facilitates controlled release applications</li>
            <li>Common pharmaceutical equipment</li>
            <li>Suitable for food industry applications</li>
            <li>Applicable for chemical and other industries</li>
            <li>Enhances product shelf life and stability</li>
          </ul>
        </div>
      `,
    },
    {
      id: 2,
      title: "Mechanical Seals: The Unsung Heroes Of Industrial Machinery",
      excerpt:
        "Explore how mechanical seals prevent leaks, improve equipment lifespan, and keep industries like chemicals, refineries, and power running efficiently.",
      image: "/assets/blogpage/image1.png",
      author: "Ram",
      date: "31 May 2021",
      content: `
        <div class="content-section">
          <p>Mechanical seals are critical components in industrial machinery that prevent fluid leakage between rotating and stationary parts. They serve as the unsung heroes of industrial operations, ensuring system integrity and preventing costly contamination issues.</p>
        </div>
        <div class="content-section">
          <h2>Understanding Mechanical Seals</h2>
          <p>Mechanical seals are precision-engineered devices designed to prevent leakage in rotating equipment such as pumps, compressors, and mixers. They consist of two primary sealing surfaces that rotate against each other while maintaining a tight seal.</p>
          <h3>Key Functions:</h3>
          <ul>
            <li>Prevent fluid leakage from rotating equipment</li>
            <li>Maintain system pressure and vacuum conditions</li>
            <li>Protect equipment from external contamination</li>
            <li>Extend overall equipment lifespan</li>
            <li>Ensure operational safety and environmental compliance</li>
            <li>Reduce maintenance costs and downtime</li>
          </ul>
          <h3>Types of Mechanical Seals:</h3>
          <ul>
            <li><strong>Single Seals:</strong> Basic configuration for standard applications</li>
            <li><strong>Double Seals:</strong> Enhanced protection for hazardous or critical processes</li>
            <li><strong>Cartridge Seals:</strong> Pre-assembled units for simplified installation</li>
            <li><strong>Split Seals:</strong> Designed for maintenance without equipment disassembly</li>
            <li><strong>Metal Bellows Seals:</strong> For high-temperature applications</li>
          </ul>
        </div>
        <div class="content-section">
          <h2>Industrial Applications</h2>
          <p>Mechanical seals are essential components across numerous industries, each with specific requirements and challenges that demand tailored sealing solutions.</p>
          
          <h3>Key Industries:</h3>
          <ul>
            <li>Chemical processing and petrochemicals</li>
            <li>Oil and gas exploration and refining</li>
            <li>Power generation and utilities</li>
            <li>Water and wastewater treatment</li>
            <li>Pharmaceutical and biotechnology</li>
            <li>Food and beverage processing</li>
          </ul>
        </div>
      `,
    },
    {
      id: 3,
      title: "How R&D Equipment Drives Innovation In Process Manufacturing",
      excerpt:
        "Discover how lab-scale granulators, coaters, and dryers are used in research to create more efficient, scalable production methods.",
      image: "/assets/blogpage/image1.png",
      author: "Ram",
      date: "31 May 2021",
      content: `
        <div class="content-section">
          <p>Research and Development equipment serves as the cornerstone of innovation in process manufacturing. These specialized tools enable companies to test, refine, and optimize their production processes before implementing full-scale commercial operations.</p>
        </div>
        <div class="content-section">
          <h2>The Role of R&D Equipment</h2>
          <p>R&D equipment bridges the gap between laboratory research and commercial production, providing manufacturers with the tools needed to develop, test, and validate new processes and products efficiently.</p>
          <h3>Key R&D Equipment Types:</h3>
          <ul>
            <li><strong>Lab-Scale Granulators:</strong> Test granulation processes with controlled batch sizes</li>
            <li><strong>Coating Systems:</strong> Develop and optimize coating formulations</li>
            <li><strong>Drying Equipment:</strong> Optimize moisture removal and thermal processes</li>
            <li><strong>Mixing Systems:</strong> Perfect blend uniformity and consistency</li>
            <li><strong>Particle Size Analyzers:</strong> Characterize material properties</li>
            <li><strong>Process Monitoring Tools:</strong> Real-time data collection and analysis</li>
          </ul>
        </div>
        <div class="content-section">
          <h2>Benefits of R&D Investment</h2>
          <p>Strategic investment in quality R&D equipment delivers significant returns through improved processes, reduced time-to-market, and enhanced product quality.</p>
          
          <h3>Key Advantages:</h3>
          <ul>
            <li>Accelerated product development cycles</li>
            <li>Optimized production parameters and conditions</li>
            <li>Cost-effective scale-up methodologies</li>
            <li>Enhanced product quality and consistency</li>
            <li>Competitive advantage through innovation</li>
            <li>Reduced commercial production risks</li>
            <li>Improved regulatory compliance</li>
          </ul>
          <h2>Future Trends in R&D Equipment</h2>
          <p>The future of R&D equipment is characterized by increased automation, data analytics, and sustainable technologies that drive continuous innovation in process manufacturing.</p>
        </div>
      `,
    },
    {
      id: 4,
      title: "Advanced Pelletization Technologies: What's New In 2025?",
      excerpt:
        "From high-shear granulators to precision coating systems, this post explores the latest innovations that improve product uniformity and production efficiency.",
      image: "/assets/blogpage/image1.png",
      author: "Ram",
      date: "31 May 2021",
      content: `
        <div class="content-section">
          <p>The pelletization industry continues to evolve rapidly with cutting-edge technologies that enhance efficiency, quality, and sustainability. These innovations are transforming how manufacturers approach solid dosage form production.</p>
        </div>
        <div class="content-section">
          <h2>Latest Pelletization Innovations</h2>
          <p>2025 brings revolutionary advances in pelletization technology, offering manufacturers unprecedented control over particle characteristics and production efficiency.</p>
          <h3>Multi-Layer Pellet Technology</h3>
          <p>Advanced systems now enable the creation of sophisticated multi-layer pellets with different core and coating materials, providing:</p>
          <ul>
            <li>Precise controlled release profiles</li>
            <li>Enhanced product stability and shelf life</li>
            <li>Improved bioavailability characteristics</li>
            <li>Reduced overall manufacturing costs</li>
            <li>Flexible dosing options for complex formulations</li>
          </ul>
          <h3>Precision Coating Systems</h3>
          <p>Next-generation coating technologies deliver exceptional performance through:</p>
          <ul>
            <li>Uniform coating thickness distribution</li>
            <li>Significantly reduced processing times</li>
            <li>Enhanced product appearance and functionality</li>
            <li>Improved coating adhesion properties</li>
            <li>Advanced process control capabilities</li>
          </ul>
        </div>
        <div class="content-section">
          <h2>Smart Manufacturing Integration</h2>
          <p>Modern pelletization equipment incorporates Industry 4.0 technologies including IoT sensors, artificial intelligence, and machine learning algorithms for real-time process optimization and predictive maintenance capabilities.</p>
          <h3>Key Features:</h3>
          <ul>
            <li>Real-time process monitoring and control</li>
            <li>Predictive maintenance algorithms</li>
            <li>Automated quality control systems</li>
            <li>Data-driven process optimization</li>
            <li>Remote monitoring and diagnostics</li>
          </ul>
          <h2>Sustainability Focus</h2>
          <p>Environmental consciousness drives innovation toward energy-efficient technologies and waste reduction strategies, contributing to more sustainable manufacturing practices across the industry.</p>
        </div>
      `,
    },
    {
      id: 5,
      title: "Why Choosing The Right Mixer Matters In Pharma Manufacturing",
      excerpt:
        "Mass mixers, equipped blenders, and multi-mill? Learn how each plays a unique role in achieving product consistency and process efficiency.",
      image: "/assets/blogpage/image1.png",
      author: "Ram",
      date: "31 May 2021",
      content: `
        <div class="content-section">
          <p>Proper mixing is fundamental to pharmaceutical manufacturing, directly impacting product quality, therapeutic efficacy, and regulatory compliance. The selection of appropriate mixing equipment can determine the success or failure of your entire production process.</p>
        </div>
        <div class="content-section">
          <h2>The Critical Role of Mixing in Pharmaceuticals</h2>
          <p>Mixing operations in pharmaceutical manufacturing require precise control to ensure uniform distribution of active ingredients, excipients, and other components throughout the final product.</p>
          <h3>Types of Pharmaceutical Mixers</h3>
          
          <h4>Mass Mixers (High-Shear Mixers)</h4>
          <ul>
            <li>Ideal for intensive wet granulation processes</li>
            <li>Provides high-energy mixing action for dense materials</li>
            <li>Suitable for viscous and cohesive formulations</li>
            <li>Excellent for achieving uniform particle distribution</li>
            <li>Capable of handling large batch sizes efficiently</li>
          </ul>
          <h4>Equipped Blenders</h4>
          <ul>
            <li>Gentle mixing action for sensitive materials</li>
            <li>Maintains particle integrity during processing</li>
            <li>Ideal for powder blending applications</li>
            <li>Prevents over-processing and product degradation</li>
            <li>Suitable for heat-sensitive formulations</li>
          </ul>
          <h4>Multi-Mill Systems</h4>
          <ul>
            <li>Combines mixing with particle size reduction</li>
            <li>Versatile processing capabilities in single unit</li>
            <li>Efficient for multi-step manufacturing processes</li>
            <li>Reduces equipment footprint and capital costs</li>
            <li>Excellent for granulation and sizing operations</li>
          </ul>
        </div>
        <div class="content-section">
          <h2>Selection Criteria for Optimal Performance</h2>
          <p>Choosing the right mixer requires careful consideration of multiple factors to ensure optimal performance and regulatory compliance.</p>
          
          <h3>Key Considerations:</h3>
          <ul>
            <li>Material characteristics and flow properties</li>
            <li>Required batch size and production capacity</li>
            <li>Processing time constraints and efficiency requirements</li>
            <li>Cleaning validation and maintenance procedures</li>
            <li>Regulatory compliance and documentation needs</li>
            <li>Integration with existing production systems</li>
          </ul>
        </div>
      `,
    },
    {
      id: 6,
      title: "The Best Equipment Drives Innovation In Process Manufacturing",
      excerpt:
        "Understand the role of granulation and pelletization in pharmaceutical manufacturing. Learn about key machines like fluid bed coaters, mass mixers, and more.",
      image: "/assets/blogpage/image1.png",
      author: "Ram",
      date: "31 May 2021",
      content: `
        <div class="content-section">
          <p>Solid processing represents a critical aspect of pharmaceutical and chemical manufacturing, involving the systematic transformation of raw materials into finished products through various mechanical and thermal processes.</p>
        </div>
        <div class="content-section">
          <h2>Comprehensive Guide to Solid Processing</h2>
          <p>Understanding solid processing equipment and methodologies is essential for achieving consistent product quality, regulatory compliance, and operational efficiency in modern manufacturing environments.</p>
          <h3>Key Processing Equipment Categories</h3>
          
          <h4>Fluid Bed Coaters</h4>
          <ul>
            <li>Provide uniform coating application across particle surfaces</li>
            <li>Excellent heat and mass transfer characteristics</li>
            <li>Suitable for temperature-sensitive materials and formulations</li>
            <li>Efficient drying capabilities with precise control</li>
            <li>Minimal product degradation during processing</li>
          </ul>
          <h4>Mass Mixers and Granulators</h4>
          <ul>
            <li>High-intensity mixing action for challenging materials</li>
            <li>Rapid granulation processes with consistent results</li>
            <li>Excellent particle size distribution control</li>
            <li>Versatile processing options for various formulations</li>
            <li>Scalable from laboratory to production volumes</li>
          </ul>
        </div>
        <div class="content-section">
          <h2>Process Optimization Strategies</h2>
          <p>Successful solid processing requires systematic optimization of multiple parameters to achieve desired product characteristics and manufacturing efficiency.</p>
          
          <h3>Critical Parameters:</h3>
          <ul>
            <li>Process conditions (temperature, humidity, pressure)</li>
            <li>Equipment selection and configuration optimization</li>
            <li>Material feed rates and processing timing</li>
            <li>Quality control measures and testing protocols</li>
            <li>Environmental controls and contamination prevention</li>
          </ul>
          <h2>Quality Assurance and Regulatory Compliance</h2>
          <p>Modern solid processing equipment incorporates advanced monitoring and control systems to ensure consistent product quality, batch-to-batch reproducibility, and compliance with stringent regulatory requirements.</p>
        </div>
      `,
    },
  ]

  const handleCardClick = (article) => {
    setSelectedArticle(article)
    setCurrentView("article")
  }

  const handleBackToHome = () => {
    setCurrentView("home")
    setSelectedArticle(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Monda:wght@400;700&family=Manrope:wght@300;400;500;600;700&display=swap');
        
        .font-monda {
          font-family: 'Monda', sans-serif;
        }
        
        .font-manrope {
          font-family: 'Manrope', sans-serif;
        }
        
        .content-section {
          margin-bottom: 1rem;
        }
        
        .content-section h2 {
          font-family: 'Monda', sans-serif;
          font-size: clamp(1.4rem, 3vw, 1.6rem); /* Increased for desktop */
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 0.75rem;
          margin-top: 1.5rem;
        }
        
        .content-section h3 {
          font-family: 'Monda', sans-serif;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          font-weight: 600;
          color: #34495e;
          margin-bottom: 0.5rem;
          margin-top: 1rem;
        }
        
        .content-section h4 {
          font-family: 'Monda', sans-serif;
          font-size: clamp(0.9rem, 2.2vw, 1rem);
          font-weight: 600;
          color: #34495e;
          margin-bottom: 0.4rem;
          margin-top: 0.8rem;
        }
        
        .content-section p {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          line-height: 1.6;
          color: #2c3e50;
          margin-bottom: 0.8rem;
        }
        
        .content-section ul {
          font-family: 'Manrope', sans-serif;
          font-size: clamp(0.8rem, 2vw, 0.9rem);
          line-height: 1.5;
          color: #2c3e50;
          margin-bottom: 0.8rem;
          padding-left: 1.2rem;
        }
        
        .content-section li {
          margin-bottom: 0.4rem;
        }
        
        .content-section strong {
          font-weight: 600;
          color: #2c3e50;
        }
        
        .image-container {
          margin: 1rem 0;
          text-align: center;
        }
        
        .content-image {
          max-width: 100%;
          height: auto;
          border-radius: 6px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {currentView === "home" && (
        <section className="relative h-[320px] md:h-[460px] md:flex-shrink-0 mx-auto w-full lg:h-[600px] flex items-center justify-center">
          {loading ? (
            <Skeleton variant="rectangular" width="100%" height="100%" className="absolute top-0 left-0" />
          ) : (
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
          )}

          <div className="absolute top-0 right-0 hidden lg:block">
            {loading ? <Skeleton variant="rectangular" width={870} height={600} /> : (
              <svg className="xl:w-[870px] lg:h-[600px]" viewBox="0 0 870 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M870 600H0L270.381 279.474L522.368 0H870V600Z" fill="black" fillOpacity="0.6" />
              </svg>
            )}
          </div>

          <div className="absolute top-0 right-0 hidden md:block lg:hidden">
            {loading ? <Skeleton variant="rectangular" width={461} height={460} /> : (
              <svg className="md:w-[461px] md:h-[460px] md:flex-shrink-0" viewBox="0 0 461 460" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M461 460H0L143.271 214.263L276.795 0H461V460Z" fill="black" fillOpacity="0.6" />
              </svg>
            )}
          </div>

          <div className="absolute top-0 right-0 block md:hidden">
            {loading ? <Skeleton variant="rectangular" width={251} height={320} /> : (
              <svg className="w-[251px] h-[320px] flex-shrink-0" viewBox="0 0 251 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M251 320H0L78.0063 149.053L150.706 0H251V320Z" fill="black" fillOpacity="0.6" />
              </svg>
            )}
          </div>

          <div className="relative z-10 ml-[40px] mt-[80px] aboutcontentbox2 aboutcontentbox md:mt-[40px] md:w-[442px] md:ml-[200px] w-[240px] h-[100px] md:h-[150px] xl:ml-[570px] lg:ml-[240px] lg:h-[235px] bg-white flex flex-col items-start p-10 md:gap-0 gap-0 lg:gap-4 lg:w-[605px] shadow-lg">
            {loading ? (
              <>
                <Skeleton variant="text" width={150} height={20} />
                <Skeleton variant="text" width={300} height={40} />
              </>
            ) : (
              <>
                <div className="flex items-center mt-[-20px] ml-[-20px] gap-2 md:mt-[-20px] lg:mt-[0px]">
                  <div className="md:w-[60px] w-[24px] h-[2px] bg-[#CF422A]"></div>
                  <h4 className="text-[#CF422A] font-[Monda] text-[16px] md:text-[20px] font-semibold uppercase">
                    Our Blog
                  </h4>
                </div>

                <h2 className="text-black ml-[-20px] font-[Monda] text-[20px] lg:text-[36px] md:text-[28px] sm:text-[24px] font-bold leading-[28px] md:leading-[50px] w-[216px] md:w-[402px]">
                  TechTalks & Updates
                </h2>
              </>
            )}
          </div>
        </section>
      )}

      {currentView === "article" && (
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
            <button
              onClick={handleBackToHome}
              className="flex items-center text-[#D32F2F] hover:text-blue-800 transition-colors font-manrope text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem]"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-1.5" />
              Back to Blogs
            </button>
          </div>
        </header>
      )}

      <main className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-6 sm:py-8">
        {currentView === "home" && (
          <>
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <div className="text-red-500 text-[26px] md:text-[20px] font-bold uppercase tracking-wide mb-2 sm:mb-3 font-monda">
                Blogs
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-monda">
                Insights & Innovations
              </h1>
              <p className="text-gray-600 text-[0.7rem] sm:text-[0.8rem] lg:text-[1rem] md:max-w-7xl mx-auto font-manrope leading-relaxed">
                Stay updated with the latest news, engineering insights, and advancements in industrial manufacturing.
                Our blog offers expert articles on mechanical seals, process equipment, R&D innovations, and best
                practices in pharmaceutical and chemical manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => handleCardClick(post)}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-pointer group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-28 sm:h-32 lg:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3 sm:p-4 lg:p-5">
                    <div className="flex items-center text-[0.6rem] sm:text-[0.7rem] text-gray-500 mb-2 sm:mb-3 font-manrope">
                      <User className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                      <span className="mr-2 sm:mr-3">{post.author}</span>
                      <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <h2 className="text-sm sm:text-base lg:text-[20px] font-semibold text-gray-900 mb-1 sm:mb-2 group-hover:text-orange-600 transition-colors font-monda leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 lg:text-[16px] text-[12px] leading-relaxed font-manrope line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {currentView === "article" && selectedArticle && (
          <div className="max-w-3xl mx-auto">
            <article className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="relative">
                <img
                  src={selectedArticle.image || "/placeholder.svg"}
                  alt={selectedArticle.title}
                  className="w-full h-40 sm:h-48 lg:h-80 object-cover"
                />
              </div>
              <div className="p-3 sm:p-6 lg:p-8">
                <h1 className="text-lg sm:text-xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 font-monda leading-tight">
                  {selectedArticle.title}
                </h1>
                <div className="flex items-center text-[0.6rem] sm:text-[0.7rem] text-gray-500 mb-4 sm:mb-6 font-manrope">
                  <User className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                  <span className="mr-2 sm:mr-3">{selectedArticle.author}</span>
                  <Calendar className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-0.5 sm:mr-1" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div
                  className="prose prose-xs sm:prose-sm lg:prose-base max-w-none"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
            </article>

            <div className="mt-8 sm:mt-12 lg:mt-16">
              <div className="text-red-500 text-[0.6rem] sm:text-[0.75rem] font-bold uppercase tracking-wider mb-4 sm:mb-6 font-monda">
                More Blogs
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {blogPosts
                  .filter((post) => post.id !== selectedArticle.id)
                  .slice(0, 3)
                  .map((post) => (
                    <div
                      key={post.id}
                      onClick={() => handleCardClick(post)}
                      className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md hover:border-gray-200 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-28 sm:h-32 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-3 sm:p-4">
                        <div className="flex items-center text-[0.55rem] sm:text-[0.6rem] text-gray-500 mb-2 font-manrope">
                          <User className="w-2.5 h-2.5 mr-0.5" />
                          <span className="mr-2">{post.author}</span>
                          <Calendar className="w-2.5 h-2.5 mr-0.5" />
                          <span>{post.date}</span>
                        </div>
                        <h3 className="text-[0.7rem] sm:text-[0.8rem] font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-3 font-monda leading-tight">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default IndustrialBlog
