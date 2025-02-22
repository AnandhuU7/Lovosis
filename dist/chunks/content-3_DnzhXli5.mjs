import { f as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_wnk5HujF.mjs';

const frontmatter = {
  "title": "IPC6658SR-X25-VF",
  "desc": "8MP 25X LightHunter IR Network PTZ Camera",
  "slug": "content-3",
  "id": 3,
  "img": "/src/assets/camera/Prime/IPC6658SR-X25-VF/IPC6658SR-X25-VF-1-main.png",
  "images": ["/src/assets/camera/Prime/IPC6658SR-X25-VF/IPC6658SR-X25-VF-3.png", "/src/assets/camera/Prime/IPC6658SR-X25-VF/IPC6658SR-X25-VF-2.png", "/src/assets/camera/Prime/IPC6658SR-X25-VF/IPC6658SR-X25-VF-1.png"],
  "alt": "8MP 25X LightHunter IR Network PTZ Camera",
  "features": ["8MP, 1/1.8’’ CMOS sensor for high-quality images", "3840×2160@30fps video resolution", "Ultra 265, H.265, H.264, MJPEG support", "25X optical zoom for clear details", "Smart intrusion detection with false alarm filtering", "People counting and crowd density monitoring", "LightHunter technology for excellent low-light performance", "Smart IR with up to 200m (656ft) night vision", "Power options: AC 24V±25%, DC 24V±25%, or PoE", "2 alarm inputs, 1 alarm output, 1 audio input, 1 audio output", "IP66 weatherproof protection"],
  "publishedTime": "2023-09-15",
  "modifiedTime": "2023-10-01"
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/content/content-3.mdx";
const file = "C:/Users/anand/OneDrive/Desktop/proje/Lovosis/src/content/content/content-3.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/anand/OneDrive/Desktop/proje/Lovosis/src/content/content/content-3.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
