import React from "react";
import { Typography, Grid, Sheet, AspectRatio, Chip, Button } from "@mui/joy";
import styles from "./style.module.scss";
import WaveCommon from "../Common/Wave";

const services = [
  {
    title: "Erection of Steel Structures and Bridges",
    description:
      "We're the builders of sturdy foundations and impressive structures that stand the test of time. Our bridges are not just connections; they're masterpieces of engineering.",
    imageSrc: "/bridge construction-bro.png",
    tag: "Best in Industry",
  },
  {
    title: "Fabrication of All Types of Steel Structures",
    description:
      "From intricate designs to robust industrial frameworks, we craft steel with precision and artistry. Our steel structures are more than functional; they're works of art.",
    imageSrc: "/fabrication.png",
  },
  {
    title: "Pre-Engineered Building (PEB)",
    description:
      "Efficiency meets innovation with our PEB solutions. We create flexible, cost-effective, and sustainable buildings that adapt to your needs.",
    imageSrc: "/peb.png",
  },
  {
    title: "Engineering Consultancy",
    description:
      "Don't navigate complex projects alone. Our expert advice guides you through the technical terrain, ensuring your projects are executed flawlessly.",
    imageSrc: "/engineering.png",
  },
  {
    title: "Detailing (Shop Drawings)",
    description:
      "Precision is in the details. Our shop drawings leave no room for error, ensuring that every component fits perfectly into your vision.",
    imageSrc: "/drafting.png",
  },
  {
    title: "Labor Suppliers for All Types of Construction Work",
    description:
      "Skilled hands bring visions to life. Our workforce is a pool of talent ready to take on any construction challenge.",
    imageSrc: "/labor.png",
  },
  {
    title: "Logistic and Export Packing Consultancy Services",
    description:
      "We don't just build; we also ensure your creations reach their destinations unscathed. Our logistics and export packing services keep your projects safe and sound during transit.",
    imageSrc: "/logistics.png",
  },
];

const Services = () => {
  return (
    <div className={styles.main}>
      <WaveCommon text={'Services'} />


      <div className={styles.container}>
        <h1 className={styles.headingText}>
          At <span>Swati Enterprises</span>, we excel in transforming visions into reality
          through our comprehensive range of services. From erecting
          awe-inspiring steel structures and bridges to fabricating intricate
          steel works of art, our expertise knows no bounds. Our innovative
          Pre-Engineered Building solutions combine efficiency and
          sustainability, while our engineering consultancy ensures flawless
          execution. With precise detailing and a skilled workforce, we bring
          dreams to life. Moreover, our logistics and export packing services
          ensure your creations reach their destinations safely, making us a
          one-stop solution for all your construction needs.
        </h1>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid key={index} xs={12} md={6}>
              <Sheet
                variant="outlined"
                className={styles.card}
                sx={{
                  borderRadius: "sm",
                  boxShadow: "md",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <AspectRatio minHeight={200} objectFit="contain">
                  <img
                    className={styles.serviceImage}
                    src={service.imageSrc}
                    alt={service.title}
                    loading="lazy"
                  />
                </AspectRatio>
                <div className={styles.cardContent}>
                  <Typography level="h3" component="h2" mb={1}>
                    {service.title}
                  </Typography>
                  <Typography mb={2} textColor="text.tertiary">
                    {service.description}
                  </Typography>
                  {service.tag && (
                    <Chip
                      variant="outlined"
                      color="primary"
                      size="lg"
                      sx={{ pointerEvents: "none" }}
                    >
                      {service.tag}
                    </Chip>
                  )}
                </div>
              </Sheet>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Services;
