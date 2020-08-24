import React from 'react';
import Img from 'gatsby-image';
import classnames from 'classnames';
import './ContentBlock.scss';

const ContentBlock = ({ data }) => {
  return (
    <section className={classnames(`content-block`, `content-block--${data.blockAlignment}` )}>
      <div class="container">
        <div className="content-block__image">
          {data.image && <Img fluid={data.image.localFile.childImageSharp.fluid} />}
        </div>
        <div className="content-block__copy">
          {data.blockTitle && <h2>{data.blockTitle}</h2>}
          <div dangerouslySetInnerHTML={{ __html: data.blockWysiwyg }} />
        </div>
      </div>
    </section>
  )
}

export default ContentBlock;
