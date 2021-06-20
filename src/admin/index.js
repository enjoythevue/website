import CMS from 'netlify-cms';
import EpisodesPreview from '!babel-loader?presets[]=@babel/react!./episodes-preview.js';
// https://www.netlifycms.org/docs/beta-features/#raw-css-in-registerpreviewstyle
import previewStyle from '!css-loader!sass-loader!./preview.scss';
CMS.registerPreviewStyle(previewStyle.toString(), { raw: true });


// https://www.netlifycms.org/docs/customization/#registerpreviewtemplate
CMS.registerPreviewTemplate('episodes',EpisodesPreview);
