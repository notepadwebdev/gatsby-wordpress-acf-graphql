import React from 'react';
import ContentBlock from '../ContentBlock/ContentBlock';

const FlexibleBlocks = ({ blocks }) => {
  const myBlocks = blocks.map((block, index) => {

    switch (block.fieldGroupName) {
      case `page_Flexibleblocks_FlexibleBlocks_FbContentBlock`:
        return <ContentBlock data={block} />

      default:
        return null;
    }
  });

  return myBlocks;
};

export default FlexibleBlocks;
