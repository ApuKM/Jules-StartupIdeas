import { Card, CardHeader } from '@heroui/react';
import React from 'react';

const Problems = ({problemStatement, proposedSolution, detailedDescription}) => {
    return (
           <div className="space-y-4">
            {/* detailed description */}
            <Card className="border border-white/10 bg-white">
              <Card.Header>
                <h2 className="text-xl font-semibold">Detailed Description</h2>
              </Card.Header>

              <Card.Description className="">
                {detailedDescription}
              </Card.Description>
            </Card>

            {/* problem & solution */}
            <div className="grid gap-2 md:gap-4 md:grid-cols-2">
              <Card className="border border-white/10 bg-white ">
                <CardHeader>
                  <h2 className="text-lg font-semibold">Problem Statement</h2>
                </CardHeader>

                <Card.Description className="">
                  {problemStatement}
                </Card.Description>
              </Card>

              <Card className="border border-white/10 bg-white ">
                <CardHeader>
                  <h2 className="text-lg font-semibold">Proposed Solution</h2>
                </CardHeader>

                <Card.Description className="">
                  {proposedSolution}
                </Card.Description>
              </Card>
            </div>
          </div>
    );
};

export default Problems;