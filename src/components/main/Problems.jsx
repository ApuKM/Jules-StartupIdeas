import { Card, CardHeader } from '@heroui/react';
import React from 'react';

const Problems = () => {
    return (
           <div className="space-y-4">
            {/* detailed description */}
            <Card className="border border-white/10 bg-white/5 backdrop-blur-md">
              <Card.Header>
                <h2 className="text-xl font-semibold">Detailed Description</h2>
              </Card.Header>

              <Card.Description className="text-white/70">
                detailed description
              </Card.Description>
            </Card>

            {/* problem & solution */}
            <div className="grid gap-2 md:gap-4 md:grid-cols-2">
              <Card className="border border-white/10 bg-white/5 backdrop-blur-md">
                <CardHeader>
                  <h2 className="text-lg font-semibold">Problem Statement</h2>
                </CardHeader>

                <Card.Description className="text-white/70">
                  problemStatement
                </Card.Description>
              </Card>

              <Card className="border border-white/10 bg-white/5 backdrop-blur-md">
                <CardHeader>
                  <h2 className="text-lg font-semibold">Proposed Solution</h2>
                </CardHeader>

                <Card.Description className="text-white/70">
                  proposedSolution
                </Card.Description>
              </Card>
            </div>
          </div>
    );
};

export default Problems;