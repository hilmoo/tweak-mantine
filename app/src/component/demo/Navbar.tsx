import { useState, useMemo, useCallback, memo } from "react";
import { TextInput, Stack, Title, Badge, Group, NavLink, ScrollArea } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { useLocation, useNavigate, useParams } from "@tanstack/react-router";
import { DataResult } from "./type";

const NavLinkItem = memo(
  ({
    pageName,
    isActive,
    onClick,
  }: {
    pageName: string;
    isActive: boolean;
    onClick: () => void;
  }) => <NavLink label={pageName} active={isActive} onClick={onClick} />,
);

NavLinkItem.displayName = "NavLinkItem";

export const DemoNavbar = memo(({ Data }: { Data: DataResult[] }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams({ strict: false });
  const selectedPage = (params as { elementName?: string }).elementName || null;

  const filteredData = useMemo(() => {
    if (!search) return Data;

    const searchLower = search.toLowerCase();

    return Data.map((categoryData) => ({
      ...categoryData,
      pages: categoryData.pages.filter(
        (page) =>
          page.pageName.toLowerCase().includes(searchLower) ||
          categoryData.category.toLowerCase().includes(searchLower),
      ),
    })).filter((categoryData) => categoryData.pages.length > 0);
  }, [search, Data]);

  const handleNavClick = useCallback(
    (pageName: string) => {
      const basePath = location.pathname.startsWith("/ext") ? "ext" : "core";
      navigate({
        to: `/${basePath}/$elementName`,
        params: { elementName: pageName },
      });
    },
    [navigate, location.pathname],
  );

  return (
    <ScrollArea>
      <Stack gap="md" p="md">
        <TextInput
          placeholder="Search components..."
          leftSection={<IconSearch size={16} />}
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />

        {filteredData.map((categoryData) => (
          <div key={categoryData.category}>
            <Group justify="space-between" mb="xs">
              <Title order={5}>{categoryData.category}</Title>
              <Badge size="sm" variant="light">
                {categoryData.pages.length}
              </Badge>
            </Group>
            {categoryData.pages.map((page) => (
              <NavLinkItem
                key={page.pageName}
                pageName={page.pageName}
                isActive={selectedPage === page.pageName}
                onClick={() => handleNavClick(page.pageName)}
              />
            ))}
          </div>
        ))}
      </Stack>
    </ScrollArea>
  );
});

DemoNavbar.displayName = "DemoNavbar";
