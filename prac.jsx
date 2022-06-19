const data = {
  type: "button",
  props: {
    classNace: "bg-green",
    children: {
      type: "b",
      props: {
        children: "Hello, element",
      },
    },
  },
};

<button class="bg-green">
  <b>Hello, element!</b>
</button>;

React.createElement(
  type,
  [props],

  [...children]
);

