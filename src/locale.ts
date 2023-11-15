import lcid from "lcid";

export const getLocaleFromLcid = (siteLcid: number | undefined) => {
  const siteLocale = siteLcid ? lcid.from(siteLcid) : undefined;
  return siteLocale?.replace("_", "-");
};
