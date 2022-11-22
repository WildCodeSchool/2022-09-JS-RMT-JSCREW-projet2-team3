const updateMeta = (title, desc) => {
  document.title = `STREAMWOOD - ${title}`;
  document.querySelector('meta[name="description"]').content = desc;
};

export default updateMeta;
