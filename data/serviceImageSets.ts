const u = (id: string, w = 1400, q = 80) =>
  `https://images.unsplash.com/photo-${id}?q=${q}&w=${w}&auto=format&fit=crop`;

// Each service gets a unique trail of 8–10 images that match its content.
// Used by ImageTrail variant 2 in each individual service hero.
export const serviceImageSets: Record<string, string[]> = {
  "software-development": [
    u("1517694712202-14dd9538aa97"), // code on monitor
    u("1555066931-4365d14bab8c"), // multi-screen code
    u("1461749280684-dccba630e2f6"), // laptop dev
    u("1551288049-bebda4e38f71"), // laptop analytics
    u("1498050108023-c5249f4df085"), // code dark
    u("1581291518633-83b4ebd1d83e"), // dev pair programming
    u("1542831371-29b0f74f9713"), // colorful code
    u("1504384308090-c894fdcc538d"), // designer workspace
    u("1593720213428-28a5b9e94613"), // monitor close
    u("1607799279861-4dd421887fb3"), // ui sketch
  ],
  "hardware-solutions": [
    u("1563986768609-322da13575f3"), // hardware rack closeup
    u("1558494949-ef010cbdcc31"), // server room
    u("1544197150-b99a580bb7a8"), // network cables
    u("1518770660439-4636190af475"), // circuit board
    u("1591488320449-011701bb6704"), // server lights
    u("1610552050890-fe99536c2615"), // cabling
    u("1581090464777-f3220bbe1b8b"), // mechanical close
    u("1483736762161-1d107f3c78e1"), // mechanic
    u("1516920660777-5f5c1d4dab98"), // engineering rack
    u("1555617981-dac3880eac6e"), // power systems
  ],
  "networking-ccna": [
    u("1544197150-b99a580bb7a8"), // network cables
    u("1558494949-ef010cbdcc31"), // server room
    u("1551808525-51a94da548ce"), // SOC dashboard
    u("1451187580459-43490279c0fa"), // cloud
    u("1518770660439-4636190af475"), // circuit
    u("1610552050890-fe99536c2615"), // patch cables
    u("1623282033815-40b05d96c903"), // fiber optic glow
    u("1597852074816-d933c7d2b988"), // switch lights
    u("1483736762161-1d107f3c78e1"), // engineer
    u("1545987796-200677ee1136"), // network closet
  ],
  cybersecurity: [
    u("1550751827-4bd374c3f58b"), // dark cyber
    u("1526374965328-7f61d4dc18c5"), // matrix code
    u("1551808525-51a94da548ce"), // SOC dashboard
    u("1563206767-5b18f218e8de"), // padlock blue
    u("1614064548237-02f5e1d6f1d2"), // hex matrix
    u("1633265486064-086b219458ec"), // shield abstract
    u("1639762681485-074b7f938ba0"), // cyber face
    u("1518770660439-4636190af475"), // circuit
    u("1555949963-aa79dcee981c"), // code lock
    u("1573164713988-8665fc963095"), // padlock
  ],
  "managed-it-services": [
    u("1558494949-ef010cbdcc31"), // server room
    u("1551808525-51a94da548ce"), // SOC dashboard
    u("1563986768609-322da13575f3"), // rack
    u("1497366216548-37526070297c"), // office
    u("1600880292203-757bb62b4baf"), // consulting meeting
    u("1581091226825-a6a2a5aee158"), // helpdesk monitor
    u("1521737711867-e3b97375f902"), // team support
    u("1560472354-b33ff0c44a43"), // call center
    u("1591435057778-26b6e21c8a3a"), // monitoring screens
    u("1518770660439-4636190af475"), // circuit
  ],
  "hr-technology": [
    u("1497366216548-37526070297c"), // hr office
    u("1600880292203-757bb62b4baf"), // consulting meeting
    u("1521737711867-e3b97375f902"), // team
    u("1551836022-deb4988cc6c0"), // interview
    u("1573497019940-1c28c88b4f3e"), // hiring meeting
    u("1542744173-8e7e53415bb0"), // collaboration
    u("1556761175-5973dc0f32e7"), // hr planning
    u("1557804506-669a67965ba0"), // happy team
    u("1606857521015-7f9fcf423740"), // employees
    u("1521791136064-7986c2920216"), // handshake
  ],
  "education-technology": [
    u("1503676260728-1c00da094a0b"), // edtech classroom
    u("1571260899304-425eee4c7efc"), // student tablet
    u("1577896851231-70ef18881754"), // online learning
    u("1610484826917-0f101a7f8c9a"), // virtual class
    u("1509062522246-3755977927d7"), // book stack
    u("1513258496099-48168024aec0"), // graduation
    u("1456513080510-7bf3a84b82f8"), // student notes
    u("1532619675605-1ede6c2ed2b0"), // study group
    u("1517433670267-08bbd4be890f"), // online course
    u("1606761568499-6d2451b23c66"), // children laptop
  ],
};

export function getServiceImageSet(slug: string): string[] {
  return serviceImageSets[slug] ?? Object.values(serviceImageSets)[0];
}
