import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"


const Projects = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulLeistung {
          edges {
            node {
              text {
                raw
                }
              title
              id
              img {
                fluid{
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  )

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Leistungen" />
          {data.allContentfulLeistung.edges.map(edge => {
            const { title, id } = edge.node;

            const Bold = ({ children }) => <span className="bold">{children}</span>
            const Text = ({ children }) => <p className="align-center">{children}</p>

            const options = {
              renderMark: {
                [MARKS.BOLD]: text => <Bold>{text}</Bold>,
              },
              renderNode: {
                [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
                [BLOCKS.EMBEDDED_ASSET]: node => {
                  return (
                    <>
                      <h2>Embedded Asset</h2>
                      <pre>
                        <code>{JSON.stringify(node, null, 2)}</code>
                      </pre>
                    </>
                  )
                },
              },
            }

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {renderRichText(edge.node.text, options)}
                        </p>
                      </div>
                      {/*  <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn cta-btn--hero"
                        href={url || '#!'}
                      >
                        See Live
                      </a>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )} */}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <Img alt={title} fluid={edge.node.img.fluid} />
                        </div>
                      </Tilt>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
