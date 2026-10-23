// Marca los enlaces de afiliado (/ir/… y Amazon) con rel="sponsored nofollow" y añade la etiqueta de Amazon.
const AFFILIATE_HOSTS = ['amazon.es', 'amzn.to', 'amzn.eu'];

export default function rehypeAffiliate({ amazonTag } = {}) {
  return (tree) => {
    const walk = (node) => {
      if (node.type === 'element' && node.tagName === 'a' && node.properties?.href) {
        const href = String(node.properties.href);
        let url;
        try { url = new URL(href); } catch { url = null; }
        const isAffiliate = href.startsWith('/ir/') || (url && AFFILIATE_HOSTS.some((h) => url.hostname.endsWith(h)));
        if (isAffiliate) {
          if (url?.hostname.endsWith('amazon.es') && amazonTag && !url.searchParams.has('tag')) {
            url.searchParams.set('tag', amazonTag);
            node.properties.href = url.toString();
          }
          node.properties.rel = ['sponsored', 'nofollow', 'noopener'];
          node.properties.target = '_blank';
        }
      }
      node.children?.forEach(walk);
    };
    walk(tree);
  };
}
