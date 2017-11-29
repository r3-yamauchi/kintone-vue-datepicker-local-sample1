import Vue from "vue";
import VueDatepickerLocal from "vue-datepicker-local";

(function () {
  kintone.events.on("app.record.create.show", (event) => {
    const elm = kintone.app.record.getSpaceElement("space1");
    if (!elm) {
      return event;
    }
    const vm = new Vue({
      el: elm,
      render: h => h(VueDatepickerLocal, {
        props: {
          format: "YYYY-MM",
          local: {
            yearSuffix: "年", // format of head
            monthsHead: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), // months of head
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_") // months of panel
          }
        },
        on: {
          input: e => {
            const item = kintone.app.record.get();
            item["record"]["text1"]["value"] = `${e.getFullYear()}-${("0" + (e.getMonth() + 1)).slice(-2)}`;
            kintone.app.record.set(item);
          }
        }
      })
    });
    return event;
  });
})();
