import React, {
  CSSProperties,
  FC,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import { Button } from "@react-md/button";
import {
  OnResizeObserverChange,
  ResizeObserver,
  useToggle,
} from "@react-md/utils";

import { randomInt } from "utils/random";

import styles from "./ResizeObserverExample.module.scss";

const DEFAULT_HEIGHT = 100;
const DEFAULT_WIDTH = 150;

interface Size {
  height: number;
  width: number;
  onResize: OnResizeObserverChange;
}

/**
 * This hook is used to handle the resize events from the `ResizeObserver`. This will update the
 * table values with the current `height` and `width` while the new sizes are animating.
 */
function useSize(): Size {
  const [size, setSize] = useState({
    height: DEFAULT_HEIGHT,
    width: DEFAULT_WIDTH,
  });

  const onResize: OnResizeObserverChange = (event) => {
    const { height, width } = event;
    setSize({ height, width });
  };

  const { height, width } = size;
  return {
    height,
    width,
    onResize,
  };
}

interface RandomStyleReturnValue {
  style: CSSProperties;
  containerRef: MutableRefObject<HTMLDivElement | null>;
}

/**
 * This hook will create a random style for the container element so that
 * the `maxHeight` and `maxWidth` can be animated. It'll stop and start
 * when the `enabled` value is toggled.
 */
function useRandomStyle(enabled: boolean): RandomStyleReturnValue {
  const [style, setStyle] = useState({
    maxHeight: DEFAULT_HEIGHT,
    maxWidth: DEFAULT_WIDTH,
  });

  const timeout = useRef<number | undefined>();
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const randomize = (): void => {
      const maxHeight = randomInt({ min: 100, max: 500 });
      const maxWidth = randomInt({
        min: 150,
        max: containerRef.current ? containerRef.current.offsetWidth : 300,
      });

      setStyle({ maxHeight, maxWidth });
      timeout.current = window.setTimeout(
        randomize,
        randomInt({ min: 2, max: 8 }) * 1000
      );
    };

    randomize();

    return () => {
      window.clearTimeout(timeout.current);
    };
  }, [enabled]);

  return { style, containerRef };
}

const SimpleExample: FC = () => {
  const [enabled, , , toggle] = useToggle(false);
  const { style, containerRef } = useRandomStyle(enabled);
  const { height, width, onResize } = useSize();

  return (
    <>
      <Button
        id="start-resizing"
        onClick={toggle}
        theme="primary"
        themeType="contained"
        className={styles.button}
      >
        {enabled ? "Stop" : "Start"}
      </Button>
      <div ref={containerRef} className={styles.container} style={style}>
        <ResizeObserver onResize={onResize} />
        <table className={styles.table}>
          <tbody>
            <tr>
              <th scope="row" className={styles.th}>
                height:
              </th>
              <td className={styles.td}>{height}</td>
            </tr>
            <tr>
              <th scope="row" className={styles.th}>
                width:
              </th>
              <td className={styles.td}>{width}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SimpleExample;
