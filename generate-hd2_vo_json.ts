import * as fs from "fs";
function encodeThisURI(s: string) {
  return s.split(' ').join('%20')
.split('#').join('%23')
;
}
function main() {
  const urlPrefix =
    "https://github.com/lenchan139/hd2_voice_bot/raw/refs/heads/master/";
  const folderName = "Helldivers 2 clips";
  const filelist = fs.readdirSync("./" + folderName);
  const json: any[] = [];
  for (const f of filelist) {
    const fname = f.split(".")[0];
    // console.log('f',fname)
    json.push({
      type: "voice",
      id: `hd2vo_${f}`,
      title: fname,
      caption: fname,
      voice_url: `https://github.com/lenchan139/hd2_voice_bot/raw/refs/heads/master/Helldivers%202%20clips/${encodeThisURI(f)}`,
    });
  }
  console.log(json);
  fs.writeFileSync("./hd2_vo.json", JSON.stringify(json, null, 2));
  // console.log(filelist)
}
main();
