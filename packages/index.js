import Button from "./button";

const components = [Button];

const install = Vue => {
  //遍历注册所有的组件
  components.forEach(component => Vue.component(component.name, component));
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  ...components
};
