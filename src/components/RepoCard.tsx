import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import axios from "axios";
import { useEffect, useState } from "react";

import { RepoData } from "../types";

interface RepoCardProps {
  username: string;
  repoName: string;
}

function RepoCard({ username, repoName }: RepoCardProps) {
  const [repoData, setRepoData] = useState<RepoData | null>(null);

  useEffect(() => {
    axios
      .get<RepoData>(`https://api.github.com/repos/${username}/${repoName}`)
      .then((response) => {
        setRepoData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching GitHub data: ", error);
      });
  }, [username, repoName]);

  return (
    <Card>
      {repoData ? (
        <>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {repoData.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {repoData.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Stack
              direction="row"
              spacing={1}
              sx={{
                overflowX: "auto",
                whiteSpace: "nowrap",
              }}
            >
              <Button
                href={repoData.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open
              </Button>
              {repoData.topics.map((topic) => (
                <Chip
                  label={topic}
                  component="a"
                  href={`https://github.com/topics/${topic}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  clickable
                />
              ))}
            </Stack>
          </CardActions>
        </>
      ) : (
        <>
          <CardContent>
            <Skeleton width="50%" sx={{ p: "4.5px" }} />
            <Skeleton />
          </CardContent>
          <CardActions>
            <Skeleton width="75%" sx={{ m: "8px" }} />
          </CardActions>
        </>
      )}
    </Card>
  );
}

export default RepoCard;
