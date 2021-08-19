import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useStaticQuery, graphql, Link } from "gatsby"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import { headData } from '../mock/data';
import '../style/main.scss';

export default () => {
  const { lang } = headData;

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulImprintData {
          edges {
            node {
              title
              text {
                raw
              }
              id
            }
          }
        }
      }
    `
  )



  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Impressum | Datenschutz</title>
        <html lang={lang || 'en'} />
        <meta name="description" content="Page not found" />
      </Helmet>
      <section id="hero" className="jumbotron">
        <Container>
            {data.allContentfulImprintData.edges.map(edge => {

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
                <div>
                  <h2 className="hero-title text-center">
                    {title || 'Impressum'}
                  </h2>
                  < div className="about-wrapper__info" >
                    <p>
                      {renderRichText(edge.node.text, options)}
                    </p>

                  </div>
                </div>
              );
            })}       
          <Fade bottom duration={1000} delay={1000} distance="30px">
            <p className="hero-cta justify-content-center">
              <Link className="cta-btn cta-btn--hero" to="/">
                Go back
              </Link>
            </p>
          </Fade>
        </Container>
      </section>
    </>
  );
};
