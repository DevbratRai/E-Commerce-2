import React from "react";
import aboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section style={{ maxWidth: "900px", margin: "0 auto", fontSize: "22px" }}>
      <h2
        style={{
          fontFamily: "sans-serif",
          textAlign: "center",
          fontSize: "30px",
          padding: "20px",
        }}
      >
        About
      </h2>
      <div>
        <img
          src={aboutImage}
          style={{
            float: "left",
            margin: "20px 50px",
            borderRadius: "50%",
            width: "200px",
            height: "200px",
          }}
        ></img>
        <p
          style={{
            fontSize: "17px",
            margin: "20px",
            color: "#777",
            display: "block",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Sed ut perspiciatis unde omnis iste natus error sit
          voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
          ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
          dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.Neque porro quisquam est, qui
          dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed
          quia non numquam eius modi tempora incidunt ut labore et dolore magnam
          aliquam quaerat voluptatem.
        </p>
      </div>
    </section>
  );
};

export default About;
