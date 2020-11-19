import React from 'react';
import PropTypes from 'prop-types';
import ContentBlock from '../ContentBlock/ContentBlock';

const FlexibleBlocks = ({ blocks }) => {
  const myBlocks = blocks.map((block, index) => {
    switch (block.fieldGroupName) {
      case `page_Flexibleblocks_FlexibleBlocks_FbContentBlock`:
        return <ContentBlock key={`$(block.title}_${index}`} {...block} />;

      default:
        return null;
    }
  });

  return myBlocks;
};

export default FlexibleBlocks;

FlexibleBlocks.propTypes = {
  blocks: PropTypes.array.isRequired
};
