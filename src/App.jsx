
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="p-6 space-y-10">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Tagur Krishna Nethipudi</h1>
        <p className="text-gray-600">Cybersecurity Analyst | SOC Automation | Threat Hunter</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="mailto:tagur1420@gmail.com"><Mail className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/tagurkrishna/"><Linkedin className="w-5 h-5" /></a>
          <a href="https://github.com/Tagurkrishna"><Github className="w-5 h-5" /></a>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p>
          I am a highly motivated cybersecurity professional with a passion for defending digital infrastructure and building automated response systems. With hands-on experience in SIEM tools, EDR platforms, SOAR automation, and threat hunting using the MITRE ATT&CK framework, I bring a strong technical foundation and real-world experience to security operations roles.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">SOC Automation Project</h3>
              <p className="text-sm text-gray-600">Integrated Shuffle, TheHive, Wazuh, VirusTotal, and Suricata to automate incident response workflows.</p>
              <a href="https://github.com/Tagurkrishna/SOC-Automation-Project" target="_blank">
                <Button className="mt-3">View on GitHub</Button>
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold">Active Directory Lab</h3>
              <p className="text-sm text-gray-600">Hands-on AD environment built to simulate privilege escalation, LDAP queries, and log monitoring.</p>
              <a href="https://github.com/Tagurkrishna/SOC-Automation-Project/tree/main/ActiveDirectory" target="_blank">
                <Button className="mt-3">View on GitHub</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
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
          ].map(skill => (
            <Badge key={skill}>{skill}</Badge>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Google Cybersecurity Professional Certificate</li>
          <li>Google IT Support Professional Certificate</li>
          <li>Google Data Analytics Professional Certificate</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p>B.Tech in Mechanical Engineering – Raghu Engineering College (First Class)</p>
      </section>
    </div>
  );
}
