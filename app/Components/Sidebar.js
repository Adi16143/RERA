import Link from "next/link";

// Sidebar component
const Sidebar = () => (
    <div class ="sidebar">
      <h2 class="head2">Navigation</h2>
      <nav>
        <Link href="./" class="link1">Project Detail</Link>
        <Link href="./DevelopD" class="link1">Development Detail</Link>
        <Link href="./Professionals" class="link1">Add Professional</Link>
        <Link href="./DocumentUpload" class="link1">Upload Document</Link>
        <Link href="./BlockEntry" class="link1">Block Entry</Link>
        <Link href="./AssignProfessional" class="link1">Assign Professionals</Link>
        <Link href="#" class="link1">Perform Certification</Link>
        <Link href="PaymentPage" class="link1">Payment Page</Link>
        {/* Add more navigation links as needed */}
      </nav>
    </div>
  );

  export default Sidebar;