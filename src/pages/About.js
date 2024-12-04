import React from 'react';

function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About RBAC UI</h1>
      <p className="mb-4 text-gray-700">
        RBAC UI is a powerful Role-Based Access Control system designed to help
        organizations manage user permissions efficiently. Our intuitive
        interface allows administrators to easily create and assign roles,
        define granular permissions, and manage user access across various
        resources.
      </p>
      <p className="mb-4 text-gray-700">
        With RBAC UI, you can:
      </p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Create and manage user accounts</li>
        <li>Define custom roles with specific permissions</li>
        <li>Assign roles to users</li>
        <li>Monitor user activity and access logs</li>
        <li>Easily update and revoke permissions as needed</li>
      </ul>
      <p className="text-gray-700">
        Whether you're a small business or a large enterprise, RBAC UI provides
        the flexibility and security you need to maintain control over your
        digital resources.
      </p>
    </div>
  );
}

export default About;

