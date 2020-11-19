import React from 'react';
import renderer from 'react-test-renderer';
import FlexibleBlocks from './FlexibleBlocks';

describe(`Flexible Blocks component`, () => {
  it(`renders correctly`, () => {
    const component = renderer.create(
      <FlexibleBlocks
        blocks={[
          {
            fieldGroupName: `page_Flexibleblocks_FlexibleBlocks_FbContentBlock`,
            title: `Block Title #1`,
            content: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim itaque assumenda molestias accusamus ipsa odit, natus architecto sunt, voluptate ullam a vitae similique, quam necessitatibus facere blanditiis nobis eum!</div>`,
            image: {
              localFile: {
                childImageSharp: {
                  fluid: {
                    base64: `data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABGnJoOo//xAAaEAACAwEBAAAAAAAAAAAAAAAAAgEDERIT/9oACAEBAAEFAkxSmvE5Fk95zT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAABBAMAAAAAAAAAAAAAAAABAAIQERIhQv/aAAgBAQAGPwI229JzR1NYiP/EABoQAQEBAQADAAAAAAAAAAAAAAEAETEhYdH/2gAIAQEAAT8hKoi482RBOvUYC5XwmUu3/9oADAMBAAIAAwAAABCn7//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAcn//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCxj//EABsQAQEBAAIDAAAAAAAAAAAAAAERACExQVFx/9oACAEBAAE/EHxOjwdZjKRqA6fXeY0DjkmUpBiJkUIPci/ZnSeXf//Z`,
                    aspectRatio: 1.5,
                    src: `http://placekitten.com/200/300`,
                    srcSet: `http://placekitten.com/200/300 200w,\nhttp://placekitten.com/400/600 400w,\nhttp://placekitten.com/800/1200 800w,\nhttp://placekitten.com/1200/1800 1200w`,
                    sizes: `(max-width: 800px) 100vw, 800px`
                  }
                }
              }
            }
          },
          {
            fieldGroupName: `page_Flexibleblocks_FlexibleBlocks_FbContentBlock`,
            title: `Block Title #2`,
            content: `<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id enim itaque assumenda molestias accusamus ipsa odit, natus architecto sunt, voluptate ullam a vitae similique, quam necessitatibus facere blanditiis nobis eum!</div>`,
            image: {
              localFile: {
                childImageSharp: {
                  fluid: {
                    base64: `data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAAD/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAABGnJoOo//xAAaEAACAwEBAAAAAAAAAAAAAAAAAgEDERIT/9oACAEBAAEFAkxSmvE5Fk95zT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAbEAABBAMAAAAAAAAAAAAAAAABAAIQERIhQv/aAAgBAQAGPwI229JzR1NYiP/EABoQAQEBAQADAAAAAAAAAAAAAAEAETEhYdH/2gAIAQEAAT8hKoi482RBOvUYC5XwmUu3/9oADAMBAAIAAwAAABCn7//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAwEBPxAcn//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxCxj//EABsQAQEBAAIDAAAAAAAAAAAAAAERACExQVFx/9oACAEBAAE/EHxOjwdZjKRqA6fXeY0DjkmUpBiJkUIPci/ZnSeXf//Z`,
                    aspectRatio: 1.5,
                    src: `http://placekitten.com/200/300`,
                    srcSet: `http://placekitten.com/200/300 200w,\nhttp://placekitten.com/400/600 400w,\nhttp://placekitten.com/800/1200 800w,\nhttp://placekitten.com/1200/1800 1200w`,
                    sizes: `(max-width: 800px) 100vw, 800px`
                  }
                }
              }
            },
            alignment: `image-right`
          }
        ]}
      />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
