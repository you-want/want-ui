import { defineComponent, PropType, toRefs } from "vue";
import "uno.css";

export type IColor =
  | "black"
  | "gray"
  | "red"
  | "yellow"
  | "green"
  | "blue"
  | "indigo"
  | "purple"
  | "pink";
export type ISize = "small" | "medium" | "large";

export const props = {
  color: {
    type: String as PropType<IColor>,
    default: "blue", // 设定默认颜色
  },
  size: {
    type: String as PropType<ISize>,
    default: "medium",
  },
  round: {
    type: Boolean,
    default: false,
  },
  plain: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
} as const;

const size = {
  small: {
    x: "2",
    y: "1",
    text: "sm",
  },
  medium: {
    x: "3",
    y: "1.5",
    text: "base",
  },
  large: {
    x: "4",
    y: "2",
    text: "lg",
  },
};

export default defineComponent({
  name: "WButton",
  props,
  setup(props, { slots }) {
    return () => (
      <button
        class={`
          py-${size[props.size].y} 
          px-${size[props.size].x} 
          font-semibold 
          ${props.round ? "rounded-full" : "rounded-lg"}
          shadow-md 
          text-${props.plain ? props.color + "-400" : "white"}
          text-${size[props.size].text}
          bg-${props.color}-${props.plain ? "100" : "500"} 
          hover:bg-${props.color}-400
          hover:text-white
          border-${props.color}-${props.plain ? "100" : "500"}
          cursor-pointer
          border-solid
          transition duration-300 ease-in-out transform hover:scale-105
          mx-1
        `}
      >
        {props.icon ? <i class={`i-ic-baseline-${props.icon} p-3`}></i> : ""}
        {slots.default ? slots.default() : ""}
      </button>
    );
  },
});
