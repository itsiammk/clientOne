import React from "react";
import { Typography, Grid, Sheet, AspectRatio, Chip, Button } from "@mui/joy";
import styles from "./style.module.scss";
import WaveCommon from "../Common/Wave";
import { UTurnLeftTwoTone } from "@mui/icons-material";

const services = [
  {
    title: "Erection of Steel Structures and Bridges",
    description:
      "We're the builders of sturdy foundations and impressive structures that stand the test of time. Our bridges are not just connections; they're masterpieces of engineering.",
    imageSrc: "/bridge construction-bro.png",
    listItems: [
      {
        title: "Metro projects",
        subtitleList: [
          <div>
            Assembly, Torquing and Erection of{" "}
            <span className="font-semibold"> Composite Girders (Steel Girders).</span>
          </div>,
          <div>
            Assembly, Torquing, Welding and erection of
            <span className="font-semibold"> FOB and Bridges.</span>
          </div>,
          <div>
            Assembly, Torquing, Welding and erection of
            <span className="font-semibold"> Station PEB Structures.</span>
          </div>,
          <div>
            Casting Yard Development{" "}
            <span className="font-semibold">
              {" "}
              Rail line fixing for gantry, gantry erection, labbour camp
              fabrication and erection, Etc.
            </span>
          </div>,
          <div>Barricades making and fixing</div>,
        ],
      },
      {
        title: "Railway and Road Projects",
        subtitleList: [
          <div>
            Assembly, Torquing, Welding and Erection of{" "}
            <span className="font-semibold">
              {" "}
              ROB, RUB, Open Web, Bow string Girders(Steel Girders)
            </span>{" "}
            With Bearings.
          </div>,
          <div>
            All types Railway’s track and Road’s edges fencings fixing work.
          </div>,
          <div>
            Railways Depot and Godown’s Steel structures (Welded and bolted)
            Erection with Sheeting work.
          </div>,
        ],
      },
      {
        title: "Others Erection Activities",
        subtitleList: [
          <div>All types Fabricated and PEB structures are Erection.</div>,
        ],
      },
    ],
    tag: "Best in Industry",
    list: true,
  },
  {
    title: "Fabrication of All Types of Steel Structures",
    description:
      "From intricate designs to robust industrial frameworks, we craft steel with precision and artistry. Our steel structures are more than functional; they're works of art.",
    imageSrc: "/fabri.webp",
    listItems: [
      {
        title:
          "We have good knowledgeable and skilled workmanship for all type fabrication work",
        subtitleList: [
          <div>
            Fabrication of all type Girder for RDSO and NON RDSO (I-Girder, Open
            web type, Bow string type, Etc.)
          </div>,
          <div>
            Fabrication of Columns and Rafters ( Like:- I- Section, Star
            Section, Box Section, Truss & Truss type Rafter, Solid type Rafter
            Etc.)
          </div>,
          <div>
            Fabrication of all type piping jobs for any types of requirements.
          </div>,
          <div>
            Fabrication all type of PEB structure and Welded structure.
          </div>,
          <div>
            Fabrication of Barricades for Metro, Railway and Roads projects.
          </div>,
        ],
      },
    ],
    list: true,
  },
  {
    title: "Pre-Engineered Building (PEB)",
    description:
      "Efficiency meets innovation with our PEB solutions. We create flexible, cost-effective, and sustainable buildings that adapt to your needs.",
    imageSrc: "/peb.png",
    list: false,
  },
  {
    title: "Engineering Consultancy",
    description:
      "Don't navigate complex projects alone. Our expert advice guides you through the technical terrain, ensuring your projects are executed flawlessly.",
    imageSrc: "/engineering.png",
    list: false,
  },
  {
    title: "Detailing (Shop Drawings)",
    description:
      "Precision is in the details. Our shop drawings leave no room for error, ensuring that every component fits perfectly into your vision.",
    imageSrc: "/drafting.png",
    list: false,
  },
  {
    title: "Labor Suppliers for All Types of Construction Work",
    description:
      "Skilled hands bring visions to life. Our workforce is a pool of talent ready to take on any construction challenge.",
    imageSrc: "/labor.png",
    list: false,
  },
  {
    title: "Logistic and Export Packing Consultancy Services",
    description:
      "We don't just build; we also ensure your creations reach their destinations unscathed. Our logistics and export packing services keep your projects safe and sound during transit.",
    imageSrc: "/logistics.png",
    list: false,
  },
];

const Services = () => {
  return (
    <div className={styles.main}>
      <WaveCommon text={"Services"} />

      <div className={styles.container}>
        <h1 className={styles.headingText}>
          At <span>Swati Enterprises</span>, we excel in transforming visions
          into reality through our comprehensive range of services. From
          erecting awe-inspiring steel structures and bridges to fabricating
          intricate steel works of art, our expertise knows no bounds. Our
          innovative Pre-Engineered Building solutions combine efficiency and
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
                    className={`${
                      service.imageSrc === "/fabri.webp" && styles.serviceImage
                    }`}
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
                    {service.list ? (
                      <div>
                        {service?.listItems?.map((item) => {
                          return (
                            <div>
                              <div className="font-semibold mb-1">{item.title}</div>
                              <ul className="mb-6">
                              {
                                item?.subtitleList?.map((itemList) => {
                                  return (
                                    <li className="text-sm ml-6 list-disc	"> {itemList} </li>
                                  )
                                })
                              }
                              </ul>
                            </div>
                          )
                        })}
                      </div>
                    ) : (
                      service.description
                    )}
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
