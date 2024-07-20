import { useMustache } from "~/composables/useMustache";
import { r2StorageFile } from "~/utils/r2StorageFile";

export default eventHandler(async (e) => {
  const file = await r2StorageFile({
    Bucket: 'skins',
    Key: 'base.html',
  });
  const mustache = useMustache();
  const template = await file.transformToString();
  return mustache.render(template, {
    title: 'sival',
    head: `
      <meta charset="UTF-8">
      <sival></sival>
    `,
    body: `
      <b>hi</b>
    `
  });
});
