import profileUrl from "@/assets/optimized/profile.webp";
import githubIcon from "@/assets/icons/github.png";
import linkedinIcon from "@/assets/icons/linkedin.png";
import stackOverflowIcon from "@/assets/icons/stack-overflow.png";

/**
 * The original screenshots live untouched in /public/projects/**.
 * For the production bundle (a single self-contained HTML file) we ship
 * web-optimised WebP copies of those exact images from src/assets/optimized/projects/**.
 * Project data keeps the original paths (e.g. "/projects/fresh-fold/Capture1.PNG");
 * this helper maps each one to its optimised twin.
 */
const optimised = import.meta.glob("../assets/optimized/projects/**/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

export function projectImage(originalPath) {
  const key = "../assets/optimized" + originalPath.replace(/\.[^.]+$/, ".webp");
  return optimised[key] ?? originalPath;
}

export const profileImage = profileUrl;

export const socialIcons = {
  github: githubIcon,
  linkedin: linkedinIcon,
  stackoverflow: stackOverflowIcon,
};
