import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import CircularProgress from "@mui/material/CircularProgress";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";

export interface RepoData {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: Organization;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string;
  hooks_url: string;
  svn_url: string;
  homepage: string;
  language: null;
  forks_count: number;
  forks: number;
  stargazers_count: number;
  watchers_count: number;
  watchers: number;
  size: number;
  default_branch: string;
  open_issues_count: number;
  open_issues: number;
  is_template: boolean;
  topics: string[];
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  has_discussions: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  permissions: Permissions;
  allow_rebase_merge: boolean;
  template_repository: Parent;
  temp_clone_token: string;
  allow_squash_merge: boolean;
  allow_auto_merge: boolean;
  delete_branch_on_merge: boolean;
  allow_merge_commit: boolean;
  subscribers_count: number;
  network_count: number;
  license: License;
  organization: Organization;
  parent: Parent;
  source: Parent;
}

export interface License {
  key: string;
  name: string;
  spdx_id: string;
  url: string;
  node_id: string;
  html_url?: string;
}

export interface Organization {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export interface Parent {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
  owner: Organization;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  archive_url: string;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  deployments_url: string;
  downloads_url: string;
  events_url: string;
  forks_url: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  languages_url: string;
  merges_url: string;
  milestones_url: string;
  notifications_url: string;
  pulls_url: string;
  releases_url: string;
  ssh_url: string;
  stargazers_url: string;
  statuses_url: string;
  subscribers_url: string;
  subscription_url: string;
  tags_url: string;
  teams_url: string;
  trees_url: string;
  clone_url: string;
  mirror_url: string;
  hooks_url: string;
  svn_url: string;
  homepage: string;
  language: null;
  forks_count: number;
  stargazers_count: number;
  watchers_count: number;
  size: number;
  default_branch: string;
  open_issues_count: number;
  is_template: boolean;
  topics: string[];
  has_issues: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  has_pages: boolean;
  has_downloads: boolean;
  archived: boolean;
  disabled: boolean;
  visibility: string;
  pushed_at: string;
  created_at: string;
  updated_at: string;
  permissions: Permissions;
  allow_rebase_merge: boolean;
  temp_clone_token: string;
  allow_squash_merge: boolean;
  allow_auto_merge: boolean;
  delete_branch_on_merge: boolean;
  allow_merge_commit: boolean;
  subscribers_count: number;
  network_count: number;
  license: License;
  forks: number;
  open_issues: number;
  watchers: number;
  security_and_analysis?: SecurityAndAnalysis;
}

export interface Permissions {
  pull: boolean;
  push: boolean;
  admin: boolean;
}

export interface SecurityAndAnalysis {
  advanced_security: AdvancedSecurity;
  secret_scanning: AdvancedSecurity;
  secret_scanning_push_protection: AdvancedSecurity;
}

export interface AdvancedSecurity {
  status: string;
}

interface GitHubRepoCardProps {
  username: string;
  repoName: string;
}

const GitHubRepoCard: React.FC<GitHubRepoCardProps> = ({
  username,
  repoName,
}) => {
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
    <Card variant="outlined" style={{ backdropFilter: "blur(8px)" }}>
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
        <CardContent>
          <CircularProgress
            size="2rem"
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
        </CardContent>
      )}
    </Card>
  );
};

export default GitHubRepoCard;
