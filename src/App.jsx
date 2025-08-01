import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Sun, Moon } from "lucide-react";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="relative p-6 space-y-10 max-w-5xl mx-auto text-gray-800 dark:text-white bg-gradient-to-br from-blue-100 to-purple-200 dark:from-gray-900 dark:to-black min-h-screen transition-all duration-500">
      
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-200 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-full p-2 shadow-lg hover:scale-110 transition-all"
        >
          {darkMode ? <Sun className="text-yellow-300" /> : <Moon className="text-gray-800" />}
        </button>
      </div>

      {/* Header */}
      <header className="text-center space-y-2">
        <h1 className="text-4xl font-bold text-blue-800 dark:text-blue-300">
          Tagur Krishna Nethipudi
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Cybersecurity Analyst | Threat Hunter | SOC Automation
        </p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="mailto:tagur1420@gmail.com"><Mail className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/tagurkrishna/"><Linkedin className="w-5 h-5" /></a>
          <a href="https://github.com/Tagurkrishna"><Github className="w-5 h-5" /></a>
          <a href="/Tagur%20Krishna%20Resume%20CyberSecurity.pdf" download><Download className="w-5 h-5" /></a>
        </div>
      </header>

      {/* About Me */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I'm a passionate cybersecurity professional with hands-on experience in SOC tools, threat detection, SIEM, SOAR, and threat hunting. I build real-world security labs and automation workflows. Currently pivoting into the cybersecurity field with prior experience in data analytics and customer support roles.
        </p>
      </section>

      {/* Key Projects */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Key Projects</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">SOC Automation</h3>
              <p>Integrated Shuffle, TheHive, Wazuh, VirusTotal, and Suricata to automate SOC workflows.</p>
              <a href="https://github.com/Tagurkrishna/SOC-Automation-Project" target="_blank" rel="noopener noreferrer">
                <Button className="mt-2">GitHub</Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Home Lab (AD Attack Simulation)</h3>
              <p>Simulated AD attacks and detections using Windows, Linux, and Zeek to practice privilege escalation and event tracing.</p>
              <a href="https://github.com/Tagurkrishna/Home-Lab" target="_blank" rel="noopener noreferrer">
                <Button className="mt-2">GitHub</Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Active Directory Simulation</h3>
              <p>Built an on-prem AD lab for testing enumeration, LDAP, Kerberoasting, and log auditing scenarios.</p>
              <a href="https://github.com/Tagurkrishna/Active-Directory" target="_blank" rel="noopener noreferrer">
                <Button className="mt-2">GitHub</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "SIEM (Splunk, Chronicle)",
            "SOAR (Shuffle, TheHive)",
            "MITRE ATT&CK",
            "Incident Response",
            "Threat Hunting",
            "Python",
            "Linux CLI",
            "SQL",
            "Suricata",
            "Network Security",
            "PowerShell"
          ].map((skill) => (
            <Badge key={skill} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>CompTIA Security+ (In Progress)</li>
          <li>Google Cybersecurity Professional Certificate</li>
          <li>Google IT Support & Data Analytics Certificates</li>
        </ul>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>B.Tech in Mechanical Engineering – Raghu Engineering College (First Class)</p>
      </section>
    </div>
  );
}
