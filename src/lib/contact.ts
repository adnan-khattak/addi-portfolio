import { profile } from "@/data/portfolio";

type ContactDraft = { name: string; email: string; subject: string; message: string };

export const createContactMailto = (draft: ContactDraft) => {
  const body = `${draft.message}\n\nFrom: ${draft.name}\nReply to: ${draft.email}`;
  return `mailto:${profile.email}?subject=${encodeURIComponent(draft.subject)}&body=${encodeURIComponent(body)}`;
};
