import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Sun, Moon } from "lucide-react";

export default function Portfolio() {
const \[darkMode, setDarkMode] = useState(false);

return (
\<div className={`p-6 space-y-10 max-w-5xl mx-auto transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}> <header className="text-center space-y-2">
\<h1 className={`text-4xl font-bold ${darkMode ? "text-blue-300" : "text-blue-800"}`}>Tagur Krishna Nethipudi</h1> <p className="text-lg">Cybersecurity Analyst | Threat Hunter | SOC Automation</p> <div className="flex justify-center gap-4 mt-2"> <a href="mailto:tagur1420@gmail.com"><Mail className="w-5 h-5" /></a> <a href="https://www.linkedin.com/in/tagurkrishna/"><Linkedin className="w-5 h-5" /></a> <a href="https://github.com/Tagurkrishna"><Github className="w-5 h-5" /></a> <a href="/Tagur%20Krishna%20Resume%20CyberSecurity.pdf" download><Download className="w-5 h-5" /></a>
\<button onClick={() => setDarkMode(!darkMode)}>
{darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} </button> </div> </header>

```
  <section>
    <h2 className="text-2xl font-semibold mb-2">About Me</h2>
    <p>
      I'm a passionate cybersecurity professional with hands-on experience in SOC tools, threat detection, SIEM, SOAR, and threat hunting. I build real-world security labs and automation workflows. Currently pivoting into the cybersecurity field with prior experience in data analytics and customer support roles.
    </p>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">Key Projects</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <Card>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">SOC Automation</h3>
          <p>Integrated Shuffle, TheHive, Wazuh, VirusTotal, and Suricata to automate SOC workflows.</p>
          <a href="https://github.com/Tagurkrishna/SOC-Automation-Project" target="_blank">
            <Button className="mt-2">GitHub</Button>
          </a>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">Home Lab (AD Attack Simulation)</h3>
          <p>Simulated AD attacks and detections using Windows, Linux, and Zeek to practice privilege escalation and event tracing.</p>
          <a href="https://github.com/Tagurkrishna/Home-Lab" target="_blank">
            <Button className="mt-2">GitHub</Button>
          </a>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold">Active Directory Simulation</h3>
          <p>Built an on-prem AD lab for testing enumeration, LDAP, Kerberoasting, and log auditing scenarios.</p>
          <a href="https://github.com/Tagurkrishna/Active-Directory" target="_blank">
            <Button className="mt-2">GitHub</Button>
          </a>
        </CardContent>
      </Card>
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">Skills</h2>
    <div className="flex flex-wrap gap-2">
      {["SIEM (Splunk, Chronicle)", "SOAR (Shuffle, TheHive)", "MITRE ATT&CK", "Incident Response", "Threat Hunting", "Python", "Linux CLI", "SQL", "Suricata", "Network Security", "PowerShell"].map(skill => (
        <Badge key={skill} className={`text-sm px-3 py-1 rounded-full ${darkMode ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-800"}`}>{skill}</Badge>
      ))}
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
    <ul className="list-disc list-inside">
      <li>CompTIA Security+ (In Progress)</li>
      <li>Google Cybersecurity Professional Certificate</li>
      <li>Google IT Support & Data Analytics Certificates</li>
    </ul>
  </section>

  <section>
    <h2 className="text-2xl font-semibold mb-2">Education</h2>
    <p>B.Tech in Mechanical Engineering – Raghu Engineering College (First Class)</p>
  </section>
</div>
```

);
}
