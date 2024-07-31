export const useNews = () => {

  const onScrollToNews = () => {
    const element = document.getElementById('element_id');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  };

  return {
    onScrollToNews,
  };
};
