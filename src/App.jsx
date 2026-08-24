import { 
  FaShieldAlt, 
  FaUserCog, 
  FaFileInvoiceDollar, 
  FaTools, 
  FaChartLine, 
  FaHeadset,
  FaBuilding,
  FaBoxes,
  FaExternalLinkAlt 
} from 'react-icons/fa';

export default function App() {
  const panels = [
    {
      id: 'super-admin',
      title: 'Super Admin',
      description: 'Super User Panel with full system permissions to manage settings, staff, and view analytics.',
      url: 'https://admin.techcrm.cc',
      icon: <FaShieldAlt />,
      color: 'var(--color-superadmin)'
    },
    {
      id: 'admin',
      title: 'Admin',
      description: 'General Administration Panel to manage leads, view regional staff records, and handle configurations.',
      url: 'https://admin.techcrm.cc',
      icon: <FaUserCog />,
      color: 'var(--color-admin)'
    },
    {
      id: 'branch',
      title: 'Demo & Sales Team Lead',
      description: 'Branch office administration dashboard to manage branch leads, operations, and local staff.',
      url: 'https://branch.techcrm.cc/login',
      icon: <FaBuilding />,
      color: 'var(--color-branch)'
    },
    {
      id: 'accountant',
      title: 'Accountant',
      description: 'Financial accounting dashboard to manage lead payments, billing logs, and invoice verifications.',
      url: 'https://accountant.techcrm.cc',
      icon: <FaFileInvoiceDollar />,
      color: 'var(--color-accountant)'
    },
    {
      id: 'installation',
      title: 'Installation',
      description: 'Logistics and technician workspace to assign tasks, update installations status, and track equipment.',
      url: 'https://installation.techcrm.cc',
      icon: <FaTools />,
      color: 'var(--color-installation)'
    },
    {
      id: 'sales',
      title: 'Sales representative',
      description: 'Representative workbench to manage allocated hot leads, schedule follow-ups, and log deals closing.',
      url: 'https://sales.techcrm.cc',
      icon: <FaChartLine />,
      color: 'var(--color-sales)'
    },
    {
      id: 'crm',
      title: 'CRM Support',
      description: 'Calling team agent space for primary caller outreach, customer support requests, and cold inquiries.',
      url: 'https://crm.techcrm.cc',
      icon: <FaHeadset />,
      color: 'var(--color-crm)'
    },
    {
      id: 'stock',
      title: 'Stock Management',
      description: 'Inventory and stock management panel to track products, manage stock levels, and monitor movements.',
      url: 'https://stock.techcrm.cc',
      icon: <FaBoxes />,
      color: 'var(--color-stock)'
    }
  ];

  return (
    <div className="portal-container">
      {/* Background blobs for premium decoration wrapped to prevent scroll overflow */}
      <div className="background-decor">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <header className="portal-header">
        <div className="logo">
          <img src="/logo.png" alt="TT CRM Logo" className="logo-img" />
          <h1>TT CRM Portal</h1>
        </div>
        <p className="subtitle">
          Welcome to the central Web Administration Dashboard Hub. Select a panel below to quickly launch its console.
        </p>
      </header>

      <main className="portal-grid">
        {panels.map((panel) => (
          <div 
            key={panel.id} 
            className="panel-card"
            style={{ '--accent-color': panel.color }}
          >
            <div className="panel-badge" style={{ backgroundColor: `${panel.color}15`, color: panel.color }}>
              {panel.icon}
            </div>

            <div className="panel-header">
              <h2>{panel.title}</h2>
              <p className="panel-desc">{panel.description}</p>
            </div>

            <a 
              href={panel.url} 
              target="_blank" 
              rel="noreferrer" 
              className="launch-btn"
            >
              <span>Launch Dashboard</span>
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        ))}
      </main>

      <footer className="portal-footer">
        <p>© 2026 TT CRM Portal Hub. All rights reserved. Built with React & Vite.</p>
      </footer>
    </div>
  );
}
