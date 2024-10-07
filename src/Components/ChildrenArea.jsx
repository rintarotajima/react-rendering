import { memo } from "react";

const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

export const ChildArea = memo((props) => {
  const { open, onClose } = props;

  console.log('ChildAreaはレンダリングされた');

  const data = [...Array(2000).keys()];
  console.log(data);
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
})
