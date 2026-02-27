import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Twitter, Mail, Copy, Check, Clock, MapPin } from "lucide-react";
import { contactInfo } from "@/data/portfolio";
import { toast } from "sonner";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: ""
  });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! I'll get back to you soon 🎉");
    setFormData({ name: "", email: "", projectType: "", message: "" });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const charCount = formData.message.length;
  const maxChars = 500;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-4xl mx-auto"
    >
      {/* Zone 1: Contact Form */}
      <div className="mb-12">
        <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-2">
          {contactInfo.headline}
        </h1>
        <p className="text-muted-foreground mb-8">
          Have a project in mind? Let's collaborate and build something amazing together.
        </p>

        <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 lg:p-8 space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                👤 Your Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                📧 Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
              🎯 Project Type
            </label>
            <select
              id="projectType"
              required
              value={formData.projectType}
              onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              <option value="">Select a project type</option>
              <option value="ai">AI / Machine Learning</option>
              <option value="web">Web Application</option>
              <option value="mobile">Mobile App</option>
              <option value="consulting">Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              💬 Tell me about your project
            </label>
            <textarea
              id="message"
              required
              rows={6}
              maxLength={maxChars}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
              placeholder="Describe your project, goals, timeline, and any specific requirements..."
            />
            <div className="flex justify-between items-center mt-2">
              <p className="text-xs text-muted-foreground">
                {charCount}/{maxChars} characters
              </p>
              <div className="h-1 w-32 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all"
                  style={{ width: `${(charCount / maxChars) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:brightness-110 transition-all glow-green-sm"
          >
            <Send className="h-4 w-4" />
            Send Demo
          </motion.button>
        </form>
      </div>

      {/* Zone 2: Social Presence */}
      <div className="mb-12">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
          Connect With Me
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {/* GitHub */}
          <a
            href={contactInfo.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-xl p-6 hover:bg-card-hover transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-4">
              <Github className="h-8 w-8 text-foreground" />
              <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Follow →
              </span>
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-1">GitHub</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {contactInfo.socials.github.username}
            </p>
            <p className="text-xs text-muted-foreground">
              {contactInfo.socials.github.contributions}
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href={contactInfo.socials.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-xl p-6 hover:bg-card-hover transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-4">
              <Linkedin className="h-8 w-8 text-foreground" />
              <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Connect →
              </span>
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-1">LinkedIn</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {contactInfo.socials.linkedin.username}
            </p>
            <p className="text-xs text-muted-foreground">
              {contactInfo.socials.linkedin.badge}
            </p>
          </a>

          {/* Twitter */}
          <a
            href={contactInfo.socials.twitter.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card rounded-xl p-6 hover:bg-card-hover transition-all hover:scale-[1.02]"
          >
            <div className="flex items-start justify-between mb-4">
              <Twitter className="h-8 w-8 text-foreground" />
              <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Follow →
              </span>
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-1">Twitter / X</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {contactInfo.socials.twitter.username}
            </p>
            <p className="text-xs text-muted-foreground italic">
              "{contactInfo.socials.twitter.latestTweet}"
            </p>
          </a>

          {/* Email */}
          <button
            onClick={handleCopyEmail}
            className="group bg-card rounded-xl p-6 hover:bg-card-hover transition-all hover:scale-[1.02] text-left"
          >
            <div className="flex items-start justify-between mb-4">
              <Mail className="h-8 w-8 text-foreground" />
              <span className="text-xs text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {copiedEmail ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </span>
            </div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-1">Email</h3>
            <p className="text-sm text-muted-foreground mb-2">{contactInfo.email}</p>
            <p className="text-xs text-muted-foreground">
              {copiedEmail ? "Copied!" : "Click to copy"}
            </p>
          </button>
        </div>
      </div>

      {/* Zone 3: Currently */}
      <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl p-6 lg:p-8">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Currently</h2>

        <div className="grid sm:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-3 h-3 rounded-full ${
                contactInfo.availability.status === "available" 
                  ? "bg-primary animate-pulse" 
                  : "bg-muted-foreground"
              }`} />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Availability
              </h3>
            </div>
            <p className="text-foreground font-medium">{contactInfo.availability.message}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Response Time
              </h3>
            </div>
            <p className="text-foreground font-medium">{contactInfo.responseTime}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Best Time
              </h3>
            </div>
            <p className="text-foreground font-medium">{contactInfo.bestTime}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <Mail className="h-4 w-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Preferred Method
              </h3>
            </div>
            <p className="text-foreground font-medium">{contactInfo.preferredMethod}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
