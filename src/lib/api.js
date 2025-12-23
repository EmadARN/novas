const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const buildApiUrl = (service) => `${BASE_URL}${VERSION}/${service}/`;

export const API_URL = BASE_URL;

export const API_CORE_URL = buildApiUrl(process.env.NEXT_PUBLIC_API_CORE);

export const API_PACKAGE_URL = buildApiUrl(process.env.NEXT_PUBLIC_API_PACKAGE);

export const API_TEXTBOOK_URL = buildApiUrl(
  process.env.NEXT_PUBLIC_API_TEXTBOOK
);

export const API_PAYMENT_URL = buildApiUrl(process.env.NEXT_PUBLIC_API_PAYMENT);

export const API_EXAM_URL = buildApiUrl(process.env.NEXT_PUBLIC_API_EXAM);
