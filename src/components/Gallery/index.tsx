export type GalleryProps = {
  items: { src: string, label: string }[];
};

export const Gallery = (props: GalleryProps) => {
  return (
    <div className={'grid grid-flow-col'}>
      {props.items.map((item, idx) => (
        <img className={'h-auto max-h-20 rounded-lg'} key={idx} src={item.src} alt={item.label}></img>
      ))}
    </div>
  );
}