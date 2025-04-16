"use client";

import { motion } from "framer-motion";

export default function SystemArchitecture() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "WebAlias",
              description:
                "Developed an URL Shortener SaaS API developed using Node.js, Express.js, and TypeScript focusing on mantainability and scalability. This project implements Clean Architecture to achieve a clear separation of concerns and facilitate future development.",
              details: [
                "URL shortening",
                "JWT-based user authentication",
                "Tiered subscription management",
                "Comprehensive analytics",
                "Redis-powered caching and rate limiting",
              ],
              tech: [
                "Express.JS",
                "Docker",
                "JsonWebTokens",
                "PostgreSQL",
                "TypeScript",
                "Redis",
                "Clean Architecture",
              ],
            },
            {
              title: "CacheProxy-CLI",
              description:
                "Developed a lightweight and configurable proxy cache server using Node.js and Redis to enhance application performance by reducing redundant requests to origin servers. This CLI tool provides a flexible solution for implementing caching strategies, improving response times and minimizing server load.",
              details: [
                "Lightweight proxy server implementation.",
                "Redis-based caching for efficient data storage and retrieval.",
                "Configurable cache Time-to-Live (TTL) for fine-grained control over cache expiration.",
                "Command-line interface (CLI) for easy setup and operation.",
                "Cache clearing functionality to manually invalidate cached data.",
                "Docker support for simplified deployment and environment consistency.",
              ],
              tech: [
                "Node.JS",
                "Express.JS",
                "Axios",
                "Redis",
                "TypeScript",
                "Docker",
                "CLI (Commander.js)",
              ],
            },
            {
              title: "NestJS-Social-Graph-API",
              description:
                "Developed a scalable and efficient backend API for a social network platform using NestJS and GraphQL. This API provides comprehensive functionality for user management, post creation and interaction, and secure authentication, designed to be a robust foundation for social media applications.",
              details: [
                "User authentication and authorization with access and refresh tokens.",
                "Post creation, updating, deletion, and search capabilities.",
                "Commenting functionality on posts.",
                "User following and unfollowing features.",
                "JWT token-based authentication for secure access control.",
                "Secure password handling using bcrypt for enhanced security.",
                "GraphQL API for flexible and efficient data fetching.",
              ],
              tech: [
                "NestJS",
                "GraphQL",
                "MongoDB",
                "TypeScript",
                "JWT",
                "bcrypt",
                "Passport.js",
              ],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-stone-900/50 rounded-xl p-6 backdrop-blur-sm border border-stone-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-stone-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-stone-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-red-500/10 rounded-full border border-red-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <motion.button
                onClick={() =>
                  window.open(
                    `https://github.com/Cesar-Marcano/${project.title}`,
                    "_blank"
                  )
                }
                whileHover={{ scale: 1.02 }}
                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-red-500/10 text-white rounded-lg border border-red-500/20 hover:bg-red-500/20 transition-colors"
              >
                <span>Go to source</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
