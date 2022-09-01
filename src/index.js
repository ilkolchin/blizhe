//styles
import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";
import "./styles/main.scss";

//global
import "./scripts/fullscreenmenu";
import "./scripts/header";

//index.html
import { FeedbackSlide } from "./scripts/feedbackSlide";
import { Form } from "./scripts/form";
import { HoverFeedbackObserve } from "./scripts/hoverfeedbackSection";
import { InfoSectionObserve } from "./scripts/infoSection";
import { FormMask } from "./scripts/mask";

if (window.location.pathname === "/") {
  InfoSectionObserve();
  FeedbackSlide();
  HoverFeedbackObserve();
  Form();
  FormMask();
}

//faq
import { FaqSection } from "./scripts/faqSection";

if (window.location.pathname === "/faq.html") {
  FaqSection();
}
