import React from "react";
import "../Styles/Home.scss";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {BsArrowUpRight} from 'react-icons/bs';
import me from '../Assets/logo.png';


const Home = () => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },

      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },

      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>Hi, i am Shaikh Atif</motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Creater"],
              autoStart: true,
              loop: true,
             cursor:"",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:shaikhatif456a@gmail.com">Hire Me</a>
            <a href="#work">Projects <BsArrowUpRight/></a>
          </div>

          <article>
            <p>
              +<span>100</span>
            </p>
              <span>Clients worldwide</span>
          </article>


          <aside>


            <article>
            <p>
              +<span>500</span>
            </p>
              <span>Projects Made</span>
            </article>


            <article>
              <p>Content</p>
              <span>shaikhatif456a@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>


      <section>
        <img src={me} alt="shaikh atif" />
      </section>
    </div>
  );
};

export default Home;
