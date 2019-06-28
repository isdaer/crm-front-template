/**
 * 接口域名的管理
 */
let base = {}
const BASE_HOST = 'https://apimarket-dev.shinho.net.cn'
const BASE_PROD_HOST = 'https://sso-dev.shinho.net.cn'
const base_DEV = {
  BPM_URL: `https://eccp-workflow-dev.shinho.net.cn/eccp-workflow`,
  PORTAL_URL: `${BASE_HOST}/eccp-portal`, // eccp门户
  ATTENDANCE_URL: `${BASE_HOST}/eccp-bpmkql`, // eccp考勤类
  DOWNLOAD_URL: `${BASE_PROD_HOST}/eccp-bpmkql`
}
const base_TEST = {
  BPM_URL: `https://eccp-workflow-dev.shinho.net.cn/eccp-workflow`,
  PORTAL_URL: `${BASE_HOST}/eccp-portal`, // eccp门户
  ATTENDANCE_URL: `${BASE_HOST}/eccp-bpmkql`, // eccp考勤类
  DOWNLOAD_URL: `${BASE_PROD_HOST}/eccp-bpmkql`
}
const base_PROD = {
  BPM_URL: `https://eccp-workflow-dev.shinho.net.cn/eccp-workflow`,
  PORTAL_URL: `${BASE_PROD_HOST}/eccp-portal`, // eccp门户
  ATTENDANCE_URL: `${BASE_HOST}/eccp-bpmkql`, // eccp考勤类
  DOWNLOAD_URL: `${BASE_PROD_HOST}/eccp-bpmkql`
}
if (process.env.NODE_ENV === 'development') {
  base = base_DEV
} else if (process.env.NODE_ENV === 'test') {
  base = base_TEST
} else if (process.env.NODE_ENV === 'production') {
  base = base_PROD
}

export default base
