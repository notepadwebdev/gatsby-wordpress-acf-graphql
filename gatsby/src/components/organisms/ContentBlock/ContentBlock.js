import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import classnames from "classnames";
import "./ContentBlock.scss";

const ContentBlock = ({ image, title, content, alignment = "image-left" }) => {
  return (
    <section
      className={classnames(`content-block`, `content-block--${alignment}`)}
    >
      <div className="container">
        {image && image.localFile && (
          <div className="content-block__image">
            <Img fluid={image.localFile.childImageSharp.fluid} />
          </div>
        )}
        <div className="content-block__copy">
          {title && <h2>{title}</h2>}
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;

ContentBlock.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.shape({
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object
      })
    })
  }),
  alignment: PropTypes.string
};
