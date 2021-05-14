import RESOURCES from './resources';


export default {
   BOOST: {
        slug: 'good',
        name: 'Boooost',
        duration: 3,
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" x="0px" y="0px"><path d="M11,15v1a1,1,0,0,1-2,0V15a1,1,0,0,1,2,0Zm3-1a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V15A1,1,0,0,0,14,14Zm8-3c0,1.029-.84,4.871-2.515,3.793a7.49,7.49,0,0,1-14.97,0C2.84,15.874,2,12.032,2,11,2,5.376,7,2,12,2S22,5.376,22,11ZM7.08,5.418a5.979,5.979,0,0,0,9.84,0,9.244,9.244,0,0,0-9.84,0ZM17.5,14.5c0-.061,0-.122,0-.183A8.65,8.65,0,0,0,12,11.788a8.65,8.65,0,0,0-5.5,2.529c0,.061,0,.122,0,.183a5.5,5.5,0,0,0,11,0Z"/><text x="0" y="39" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Royyan Wijaya</text><text x="0" y="44" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>`,
        description: 'Increases positive effects by 10',
        effects: [
            {
                type: RESOURCES.SECURITY.slug,
                modifier: 10,
            },
            {
                type: RESOURCES.WEALTH.slug,
                modifier: 10,
            },
            {
                type: RESOURCES.FOOD.slug,
                modifier: 10,
            }
        ]
   }
}