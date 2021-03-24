import React from 'react';
import './home.css'
import {graphql, navigate, StaticQuery} from 'gatsby';

export default () => (
    <StaticQuery
        query= {graphql`
    query HomeQuery {
        allContentfulBlog(
            limit: 9
            sort: {fields: [createdAt], order: DESC}
            filter: {
                node_locale: {eq: "en-US",}
                home: {eq: true}
            }
        ){
        edges {
            node{ 
                id
                slug
                title
                category{ 
                    id
                    title
                }
                featuredImage {
                    fluid(maxWidth: 1200, quality: 85) {
                        src 
                        ...GatsbyContentfulFluid
                    }
                }
            }
        }
        }
    }
    `}

    render = {data => (
        <div className= "feed">
            {data.allContentfulBlog.edges.map(edge => (
                <div key={edge.node.id} className= "card"
                onClick= {() => navigate(`/blog/${edge.node.slug}`)}
                style={{
                        backgroundImage: `linear-gradient(
                            to bottom,
                            rgba(10, 10, 10, 0) 0%,
                            rgba(10 ,10, 10, 0) 50%,
                            rgba(10, 10, 10, 0.7) 100%),
                            url(${edge.node.featuredImage.fluid.src})`
                        }}>
                    
                  <p className= 'card__category'>{edge.node.category.title}</p>
        
                    <p className= 'card__title'> {edge.node.title}</p>
                </div>
            ))}
        </div> 
    )}

    />

)