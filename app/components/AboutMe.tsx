"use client";

import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section className="py-20 px-4 bg-stone-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          About me
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          Hi! I'm Cesar Marcano. I'm a highly motivated aspiring backend
          developer with a strong foundation in TypeScript and JavaScript,
          complemented by a strong command of Express.JS and skills in NestJS.
          My experience extends to building robust and scalable application APIs
          and applying good practices like decoupling, design patterns, and
          clean architecture, as the demonstrated in the projects below. I have
          practical knowledge in Docker, Git for SCM, and I understand design
          principles of RESTful and GraphQL. I'm also familiar with the best
          practices of web security. My experience in relational databases
          (MySQL, PostgreSQL) includes competence in a principiant level, and
          intermediate skills with NoSQL (MongoDB, Redis, Firebase). I'm
          constantly learning and actively applying design patterns and clean
          architecture concepts in my projects, along with the implementation of
          unit testing with Jest. With a C2 English proficiency level certified
          and native fluency in Spanish, I'm eager to apply my technical
          abilities and my passion for the backend development in a professional
          environment.
        </div>
      </div>
    </section>
  );
}
