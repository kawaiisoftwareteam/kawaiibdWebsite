import React from 'react'; 
// import bmet1 from '../../Assets/bmet_mou.jpg'; 
import sswTraining from '../../Assets/sswTraining.png'; 
// import foodfest1 from "../../Assets/foodfest1.jpg";
import foodfest2 from "../../Assets/foodfest2.jpg";
import bmet2 from "../../Assets/bmet2.jpg"
import egrowth from "../../Assets/egrowthmou.jpg"
import itadvisor from "../../Assets/advisor.jpeg"
import ssw from "../../Assets/10ssw.jpeg"
import ssw1 from "../../Assets/ssw1.jpeg";
import ssw2 from "../../Assets/ssw2.jpeg";
import ssw3 from "../../Assets/ssw3.jpg";
import ssw4 from "../../Assets/ssw4.jpg";
import ssw5 from "../../Assets/ssw5.jpg";
import ssw6 from "../../Assets/ssw6.jpg";

const MasonryGallery = () => {     
    const images = [         
        {              
            src: bmet2,              
            alt: "bmet2",              
            title: "Kawaii Group & BMET MoU Signing",              
            description: "New Opportunity Ahead Together"          
        },   
        {              
            src: foodfest2,              
            alt: "foodfest1",              
            title: "Japanese Food and Traditional Green Tea Ceremony",              
            description: "Organized by Achieve Japan"          
        },      
        {              
            src: sswTraining,              
            alt: "SSW Training",              
            title: "SSW Training Program",              
            description: "Comprehensive skill development"          
        },
  
        {              
            src: itadvisor,              
            alt: "advisor",              
            title: "Meeting with Kawaii Advanced Technology & Solution Ltd's Advisor",              
            description: "Discussing About Japan IT Training Program in Bangladesh"          
        },
        {              
            src: ssw,              
            alt: "SSW Success",              
            title: "Successful Specified Skilled Workers Candidates",              
            description: "Successful SSW Agriculture Candidates from Kawaii Group Who are currently working in Japan"          
        },
        {
            src: ssw1,
            alt: "SSW Success",
            title: "Successful Specified Skilled Workers Candidates",
            description: "Successful SSW Agriculture Candidates from Kawaii Group Who are currently working in Japan"
        },
        {
            src: ssw2,
            alt: "SSW Success",
            title: "Successful Specified Skilled Workers Candidates",
            description: "Successful SSW Agriculture Candidates from Kawaii Group Who are currently working in Japan"
        },
        {
            src: ssw3,
            alt: "SSW Success",
            title: "Successful Specified Skilled Workers Candidates",
            description: "Successful SSW Agriculture Candidates from Kawaii Group Who are currently working in Japan"
        },
        {
            src: ssw4,
            alt: "SSW Success",
            title: "Successful Specified Skilled Workers Candidates",
            description: "Successful SSW Agriculture Candidates from Kawaii Group Who are currently working in Japan"
        },
        {
            src: ssw5,
            alt: "SSW Success",
            title: "Successful Specified Skilled Workers Candidates",
            description: "Successful SSW Agriculture Candidates from Kawaii Group Who are currently working in Japan"
        },
        {
            src: ssw6,
            alt: "SSW Success",
            title: "Successful Specified Skilled Workers Candidates",
            description: "Successful SSW Agriculture Candidates from Kawaii Group Who are currently working in Japan"
        },
        {              
            src: egrowth,              
            alt: "egrowth",              
            title: "Kawaii Group-Egrowth Inc. MOU Signing Ceremony",              
            description: "New opportunities in IT engineer training and job placement"          
        }   
    ];      

    return (         
        <div className="mx-auto">
    <div className="columns-1 sm:columns-2 lg:columns-3 py-10 md:py-20 space-y-4">
        {images.map((image, index) => (
            <div
                key={index}
                className="relative break-inside-avoid mb-4 transition-transform duration-300 hover:scale-105 group"
            >
                <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-lg"
                />
                
                {/* Gradient Overlay on Hover */}
                <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-b from-black/0 to-black/80"
                    style={{
                        boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.10)'
                    }}
                />

                {/* Title & Description - only on hover */}
                <div className="absolute bottom-0 left-0 p-4 w-full z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3
                        className="text-white text-2xl font-bold transform transition-all duration-300 group-hover:-translate-y-1"
                        style={{
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            fontFamily: 'Inter',
                        }}
                    >
                        {image.title}
                    </h3>
                    <p
                        className="text-white text-xl font-normal mt-2 transition-opacity duration-300"
                        style={{
                            textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                            fontFamily: 'Inter',
                        }}
                    >
                        {image.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
</div>
  
    ); 
};  

export default MasonryGallery;